# 313 Learning Center

## Run locally
npm install && npm run dev  (open http://localhost:3000)

## Edit content
Everything (name, WhatsApp number, contacts, courses) is in lib/site.js.
Put photos and your logo in /public and reference them as /photo.jpg.

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. On vercel.com choose Add New > Project, import the repo, click Deploy.
3. Project > Settings > Domains: add your 313lc domain and follow the DNS instructions.
4. Contact form: edit app/api/contact/route.js to send email (Resend or Formspree).
