// lib/email.tsx
import * as React from 'react';

export function ReceiptEmail({
  customerEmail,
  productName,
  orderId,
  siteUrl,
  files,
}: {
  customerEmail: string;
  productName: string;
  orderId: string;
  siteUrl: string;
  files: { label: string; path: string }[];
}) {
  const safeFiles = files ?? [];
  return (
    <html>
      <body style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif', color: '#2b2b2b' }}>
        <div style={{ maxWidth: 560, margin: '24px auto', padding: 20, border: '1px solid #eee', borderRadius: 12 }}>
          <h1 style={{ marginTop: 0, marginBottom: 12 }}>🎄 Thank you for your purchase</h1>
          <p style={{ marginTop: 0 }}>
            Hi{customerEmail ? ` ${customerEmail}` : ''}, your order is confirmed.
          </p>

          <p style={{ margin: '12px 0' }}>
            <strong>Product:</strong> {productName}
            <br />
            <strong>Order:</strong> {orderId}
          </p>

          <p>Download your files:</p>
          <ul>
            {safeFiles.length > 0 ? (
              safeFiles.map((f, i) => (
                <li key={i}>
                  <a href={f.path} target="_blank" rel="noreferrer">
                    {f.label}
                  </a>
                </li>
              ))
            ) : (
              <li>
                Downloads will also be available on your success page. If you don’t see them, reply and we’ll help.
              </li>
            )}
          </ul>

          <p style={{ marginTop: 20 }}>
            You can also open your order page here:{' '}
            <a href={`${siteUrl}/success`}>{siteUrl}/success</a>
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '20px 0' }} />

          <p style={{ fontSize: 13, color: '#666' }}>
            Need help? Reply to this email or contact{' '}
            <a href={`mailto:${process.env.SUPPORT_EMAIL || 'support@easychristmas.shop'}`}>
              {process.env.SUPPORT_EMAIL || 'support@easychristmas.shop'}
            </a>
            .
          </p>
        </div>
      </body>
    </html>
  );
}
