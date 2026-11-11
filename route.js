// Placeholder: logs the message. Connect Resend, Formspree or SMTP here to receive emails.
export async function POST(req) {
  const { name, email, message } = await req.json();
  if (!name || !email || !message) return Response.json({ ok: false }, { status: 400 });
  console.log("New enquiry:", { name, email, message });
  return Response.json({ ok: true });
}
