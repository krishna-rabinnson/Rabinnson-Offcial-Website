import React from 'react';
import { Resend } from 'resend';
import { ToCompanyContact } from '@/emails/templates/toCompanyContact';
import { ToUserContact } from '@/emails/templates/toUserContact';

// Read key from environment at runtime. Do NOT construct the client at module load
// time because the Resend constructor throws when the key is missing which
// breaks Next.js builds that import this module for page-data collection.
const RESEND_API_KEY = process.env.RESEND_API_KEY;

function getResendClient() {
  if (!RESEND_API_KEY) return null;
  return new Resend(RESEND_API_KEY);
}

type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

function validate(payload: Partial<ContactPayload>) {
  const errors: Record<string, string> = {};
  if (!payload.firstName || String(payload.firstName).trim().length === 0) errors.firstName = 'First name required';
  if (!payload.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(payload.email))) errors.email = 'Valid email required';
  if (!payload.message || String(payload.message).trim().length < 5) errors.message = 'Message too short';
  return errors;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const errors = validate(body);
    if (Object.keys(errors).length > 0) {
      return new Response(JSON.stringify({ errors }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    const payload: ContactPayload = {
      firstName: String(body.firstName || ''),
      lastName: String(body.lastName || ''),
      email: String(body.email || ''),
      message: String(body.message || ''),
    };

    // Dynamically import renderer
    const { renderToStaticMarkup } = await import('react-dom/server');
    const ReactModule = await import('react');
    const ReactLib = (ReactModule as any).default || ReactModule;

    const companyHtml = '<!doctype html>' + renderToStaticMarkup(ReactLib.createElement(ToCompanyContact, payload as any));
    const userHtml = '<!doctype html>' + renderToStaticMarkup(ReactLib.createElement(ToUserContact, { firstName: payload.firstName }));


    // Ensure API key is configured and create the client lazily.
    if (!RESEND_API_KEY) {
      return new Response(JSON.stringify({ error: 'Resend API key is not configured on the server' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }

    const resend = getResendClient()!;

    // Send using verified sender (your Resend account sender)
    const sendErrors: string[] = [];

    try {
      await resend.emails.send({
        from: 'Rabinnson <noreply@connect.rabinnson.com>',
        to: [payload.email,'assitant@connect.rabinnson.com'],
        subject: `New contact message — ${payload.firstName} ${payload.lastName}`,
        html: companyHtml,
        headers: { 'Reply-To': 'response@rabinnson.com' },
      });
    } catch (err: any) {
      sendErrors.push(`company:${err?.message || String(err)}`);
    }

    // Send acknowledgement to user
    try {
      await resend.emails.send({
        from: 'Rabinnson <noreply@connect.rabinnson.com>',
        to: [`${payload.email}`,'assitant@connect.rabinnson.com'],
        subject: 'Thanks for contacting Rabinnson',
        html: userHtml,
        headers: { 'Reply-To': 'response@rabinnson.com' },
      });
    } catch (err: any) {
      sendErrors.push(`user:${err?.message || String(err)}`);
    }

    if (sendErrors.length > 0) {
      return new Response(JSON.stringify({ ok: false, sendErrors }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (err: any) {
    console.error('send-contact error', err && (err.stack || err));
    const message = err?.message || String(err) || 'Server error sending contact email';
    return new Response(JSON.stringify({ error: message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
