import React from 'react';
import { Resend } from 'resend';
import { ToCompanyEmail } from '@/emails/templates/toCompany';
import { ToUserEmail } from '@/emails/templates/toUser';

// Use env var at runtime and create the Resend client lazily to avoid build-time exceptions
const RESEND_API_KEY = process.env.RESEND_API_KEY;

function getResendClient() {
  if (!RESEND_API_KEY) return null;
  return new Resend(RESEND_API_KEY);
}

type IdeaPayload = {
  fullName: string;
  email: string;
  mobileNumber: string;
  city?: string;
  currentStage: string;
  isRegistered: boolean;
  industry?: string;
  description: string;
  support: string[];
  preferredMode: string;
  preferredTimeSlot: string;
};

function validate(payload: Partial<IdeaPayload>) {
  const errors: Record<string, string> = {};
  if (!payload.fullName || payload.fullName.trim().length < 3) errors.fullName = 'Full name required';
  if (!payload.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) errors.email = 'Valid email required';
  if (!payload.mobileNumber || !/^[6-9]\d{9}$/.test(payload.mobileNumber)) errors.mobileNumber = 'Valid Indian mobile required';
  if (!payload.currentStage) errors.currentStage = 'Stage required';
  if (!payload.description || payload.description.trim().length < 20) errors.description = 'Description too short';
  if (!payload.support || !Array.isArray(payload.support) || payload.support.length === 0) errors.support = 'Select at least one support option';
  if (!payload.preferredMode) errors.preferredMode = 'Preferred mode required';
  if (!payload.preferredTimeSlot) errors.preferredTimeSlot = 'Preferred time required';
  return errors;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
  
    const errors = validate(body);
    if (Object.keys(errors).length > 0) {
      return new Response(JSON.stringify({ errors }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }
  
    const payload: IdeaPayload = {
      fullName: String(body.fullName || ''),
      email: String(body.email || ''),
      mobileNumber: String(body.mobileNumber || ''),
      city: String(body.city || ''),
      currentStage: String(body.currentStage || ''),
      isRegistered: Boolean(body.isRegistered),
      industry: String(body.industry || ''),
      description: String(body.description || ''),
      support: Array.isArray(body.support) ? body.support.map(String) : [],
      preferredMode: String(body.preferredMode || ''),
      preferredTimeSlot: String(body.preferredTimeSlot || ''),
    };
    // If the API key is not configured, fail early with a clear error.
    if (!RESEND_API_KEY) {
      // Abort when API key missing
      return new Response(JSON.stringify({ error: 'Resend API key is not configured on the server' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }


    // Dynamically import server renderer to avoid Next.js build-time warnings.
    const { renderToStaticMarkup } = await import('react-dom/server');
    const ReactModule = await import('react');
    const ReactLib = (ReactModule as any).default || ReactModule;

    // Render React email to HTML on the server and send the HTML string.
    const companyHtml = '<!doctype html>' + renderToStaticMarkup(ReactLib.createElement(ToCompanyEmail, payload as any));

    const resend = getResendClient()!;

    const sendErrors: string[] = [];
    try {
      await resend.emails.send({
        from: 'Rabinnson <noreply@connect.rabinnson.com>',
        to: [payload.email,'assitant@connect.rabinnson.com'],
        subject: `New idea submission — ${payload.fullName}`,
        html: companyHtml,
        headers: { 'Reply-To': 'response@rabinnson.com' },
      });
    } catch (err: any) {
      sendErrors.push(`company:${err?.message || String(err)}`);
    }


    // Send acknowledgement email to user (if email provided)
    if (payload.email) {
      const firstName = payload.fullName.split(' ')[0] || payload.fullName;
      const userHtml = '<!doctype html>' + renderToStaticMarkup(ReactLib.createElement(ToUserEmail, { firstName }));
      try {
        await resend.emails.send({
          from: 'Rabinnson <noreply@connect.rabinnson.com>',
          to: [payload.email,'assitant@connect.rabinnson.com'],
          subject: 'Thanks for your submission — Rabinnson',
          html: userHtml,
          headers: { 'Reply-To': 'response@rabinnson.com' },
        });
      } catch (err: any) {
        sendErrors.push(`user:${err?.message || String(err)}`);
      }
    }
    if (sendErrors.length > 0) {
      return new Response(JSON.stringify({ ok: false, sendErrors }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (err: any) {
    console.error('send-idea error', err);
    const message = err?.message || String(err) || 'Server error sending email';
    return new Response(JSON.stringify({ error: message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
