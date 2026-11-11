"use client";
import { useState } from "react";
export default function ContactForm() {
  const [msg, setMsg] = useState("");
  async function submit(e) {
    e.preventDefault();
    const form = e.target;
    const data = Object.fromEntries(new FormData(form));
    setMsg("Sending…");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error();
      setMsg("Message sent. We will reply within two days."); form.reset();
    } catch { setMsg("Could not send. Please try WhatsApp instead."); }
  }
  return (
    <form onSubmit={submit}>
      <input name="name" placeholder="Your name" required aria-label="Your name" />
      <input type="email" name="email" placeholder="Email" required aria-label="Email" />
      <textarea name="message" rows={4} placeholder="Your message" required aria-label="Message" />
      <button className="btn" type="submit">Send message</button>
      <p id="msg" role="status">{msg}</p>
    </form>
  );
}
