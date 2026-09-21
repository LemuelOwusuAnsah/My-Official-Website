export default async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  try {
    const body = await req.json()
    const { name, email, subject, message } = body

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const RESEND_KEY = process.env.RESEND_API_KEY
    if (!RESEND_KEY) {
      return new Response(JSON.stringify({ error: 'Server misconfigured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const headers = {
      'Authorization': `Bearer ${RESEND_KEY}`,
      'Content-Type': 'application/json',
    }

    // 1. Notify Lemuel
    const ownerRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        from: 'Portfolio Contact <contact@lemuelowusuansah.org>',
        to: ['hello@lemuelowusuansah.org', 'owusuansahlemuel@gmail.com'],
        reply_to: email,
        subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] New message from ${name}`,
        text: `From: ${name} <${email}>\n\nSubject: ${subject || '(no subject)'}\n\n${message}`,
      }),
    })

    if (!ownerRes.ok) {
      const err = await ownerRes.text()
      console.error('Owner notification failed:', err)
      return new Response(JSON.stringify({ error: 'Send failed' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // 2. Auto-reply to sender
    const firstName = String(name).split(' ')[0]
    const replyRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        from: 'Lemuel Owusu-Ansah <hello@lemuelowusuansah.org>',
        to: [email],
        reply_to: 'hello@lemuelowusuansah.org',
        subject: 'Thank you for reaching out',
        text: `Hello ${firstName},\n\nThank you for reaching out to Lemuel Owusu-Ansah. Your message came through and I have it safely.\n\nI personally read every message and will respond within 24 hours. If your enquiry is urgent, you can reach me directly on WhatsApp at +233 24 579 1297.\n\nIn the meantime, feel free to browse my work at lemuelowusuansah.org.\n\nWarm regards,\nLemuel Owusu-Ansah\nFull-Stack Developer · Author · Music Producer\nlemuelowusuansah.org`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; color: #0a0a0a; line-height: 1.6;">
            <p>Hello ${firstName},</p>
            <p>Thank you for reaching out to <strong>Lemuel Owusu-Ansah</strong>. Your message came through and I have it safely.</p>
            <p>I personally read every message and will respond within <strong>24 hours</strong>. If your enquiry is urgent, you can reach me directly on WhatsApp at <a href="https://wa.me/233245791297" style="color: #65a30d;">+233 24 579 1297</a>.</p>
            <p>In the meantime, feel free to browse my work at <a href="https://lemuelowusuansah.org" style="color: #65a30d;">lemuelowusuansah.org</a>.</p>
            <p style="margin-top: 32px;">Warm regards,</p>
            <p style="margin: 0;"><strong>Lemuel Owusu-Ansah</strong><br />
            <span style="color: #525252; font-size: 14px;">Full-Stack Developer · Author · Music Producer</span><br />
            <a href="https://lemuelowusuansah.org" style="color: #65a30d; font-size: 14px;">lemuelowusuansah.org</a></p>
          </div>
        `,
      }),
    })

    if (!replyRes.ok) {
      const err = await replyRes.text()
      console.error('Auto-reply failed (non-fatal):', err)
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('Function error:', err)
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}

export const config = {
  path: '/api/send-email',
}
