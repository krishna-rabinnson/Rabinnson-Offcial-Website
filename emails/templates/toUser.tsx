import * as React from 'react';

interface ToUserEmailProps {
    firstName: string;
}

export const ToUserEmail: React.FC<ToUserEmailProps> = ({ firstName }) => {
    return (
        <html>
            <head>
                <style>
                    {`
                        body{font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif}
                        .container{max-width:600px;width:100%;background:#fff;border-radius:8px;overflow:hidden;margin:20px auto;border:1px solid #e6e6e6}
                        .header{background:#000;padding:28px 20px;text-align:center;color:#fff}
                        .logo{max-width:220px;height:auto;display:block;margin:0 auto 8px}
                        .content{padding:36px}
                        .btn:hover{background-color:#333333 !important}
                        @media only screen and (max-width:600px){.content{padding:20px}.logo{max-width:160px}}
                    `}
                </style>
            </head>
            <body style={{ margin: 0, padding: 0, backgroundColor: '#f4f4f4', fontFamily: 'Arial, sans-serif' }}>
                <table width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: '#f4f4f4' }}>
                    <tr>
                        <td align="center">
                            <table className="container" width="600" cellPadding="0" cellSpacing="0" style={{ maxWidth: '600px', width: '100%', backgroundColor: '#ffffff', borderRadius: '8px', overflow: 'hidden', margin: '20px 0', border: '1px solid #e0e0e0' }}>
                                {/* Header */}
                                <tr>
                                    <td style={{ backgroundColor: '#000000', padding: '30px', textAlign: 'center' }}>
                                        <img className="logo" src="https://static.wixstatic.com/media/c4fbc9_eb4b40d3a43e47048f600f6119cce635~mv2.png/v1/fill/w_392,h_120,al_c,q_85,enc_avif,quality_auto/rabinnson%20(2).png" alt="RABINNSON" />
                                        <h2 style={{ color: '#ffffff', margin: 0, fontSize: '24px', letterSpacing: '2px' }}>RABINNSON</h2>
                                        <p style={{ color: '#888888', margin: '5px 0 0', fontSize: '12px', textTransform: 'uppercase' }}>Private Limited</p>
                                    </td>
                                </tr>

                                {/* Body */}
                                <tr>
                                    <td className="content" style={{ padding: '40px' }}>
                                        <h1 style={{ color: '#333333', fontSize: '24px', margin: '0 0 20px' }}>Thank You, {firstName}!</h1>
                                        <p style={{ color: '#666666', fontSize: '16px', lineHeight: '1.6', margin: '0 0 20px' }}>
                                            We have received your enquiry and appreciate your interest in Rabinnson Private Limited. Our team is reviewing your details and will get back to you shortly.
                                        </p>
                                        <p style={{ color: '#666666', fontSize: '16px', lineHeight: '1.6', margin: '0 0 30px' }}>
                                            In the meantime, feel free to browse our website to learn more about our services.
                                        </p>
                                        <div style={{ textAlign: 'center' }}>
                                            <a href="https://www.rabinnson.com" className="btn" style={{ display: 'inline-block', padding: '12px 30px', backgroundColor: '#000000', color: '#ffffff', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold', fontSize: '16px', transition: 'background-color 0.3s ease' }}>
                                                Visit Website
                                            </a>
                                        </div>
                                    </td>
                                </tr>

                                {/* Footer */}
                                <tr>
                                    <td style={{ backgroundColor: '#f9f9f9', padding: '30px', borderTop: '1px solid #eeeeee' }}>
                                        <table width="100%" cellPadding="0" cellSpacing="0">
                                            <tr>
                                                <td style={{ color: '#333333', fontSize: '14px', fontWeight: 'bold', paddingBottom: '10px' }}>
                                                    RABINNSON PRIVATE LIMITED
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ color: '#666666', fontSize: '13px', lineHeight: '1.6', paddingBottom: '20px' }}>
                                                    WeWork, 13th Floor, Building No 9, IT Park,<br />
                                                    Shaikpet, Hi Tech City, Hyderabad - 500081,<br />
                                                    Telangana State
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ paddingBottom: '5px' }}>
                                                    <span style={{ color: '#888888', fontSize: '13px' }}>Call Us: </span>
                                                    <a href="tel:+91-96689-01245" style={{ color: '#333333', textDecoration: 'none', fontSize: '13px' }}>+91 96689-01245</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ paddingBottom: '5px' }}>
                                                    <span style={{ color: '#888888', fontSize: '13px' }}>e-Mail: </span>
                                                    <a href="mailto:response@rabinnson.com" style={{ color: '#333333', textDecoration: 'none', fontSize: '13px' }}>response@rabinnson.com</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span style={{ color: '#888888', fontSize: '13px' }}>Web: </span>
                                                    <a href="https://www.rabinnson.com" style={{ color: '#333333', textDecoration: 'none', fontSize: '13px' }}>www.rabinnson.com</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </body>
        </html>
    );
};

export default ToUserEmail;
