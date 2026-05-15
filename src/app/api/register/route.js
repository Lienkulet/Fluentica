import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { name, phone, email } = await request.json()

    if (!name || !phone || !email) {
      return Response.json({ error: 'All fields are required' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: 'Cerere nouă de consultație gratuită – Fluentica',
      html: `
        <h2>Cerere nouă de consultație</h2>
        <p><strong>Nume:</strong> ${name}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error('Email error:', error)
    return Response.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
