import Link from "next/link";
import ContactForm from "../components/ContactForm";
import { site, courses } from "../lib/site";

export default function Home() {
  return (
    <main>
      <div className="hero">
        <h1>{site.tagline}</h1>
        <p>{site.intro}</p>
        <div><a className="btn" href="#contact">Enroll now</a><a className="btn ghost" href="#courses">Browse courses</a></div>
      </div>
      <section id="courses">
        <h2>Courses</h2>
        <p className="sub">Choose a course to see the full lesson plan.</p>
        <div className="grid">
          {courses.map((c) => (
            <Link key={c.slug} href={`/courses/${c.slug}`} className="card">
              <span className="tag">{c.level} · {c.duration}</span>
              <h3>{c.title}</h3><p>{c.summary}</p>
            </Link>
          ))}
        </div>
      </section>
      <section id="about">
        <h2>About us</h2>
        <div className="profile">
          <div className="avatar" aria-hidden="true">313</div>
          <div>
            <p className="sub" style={{ margin: 0 }}>Write two sentences here about the center and why you teach.</p>
            <div className="stats"><div><strong>500+</strong>students taught</div><div><strong>12</strong>years of experience</div><div><strong>4.9</strong>average rating</div></div>
          </div>
        </div>
      </section>
      <section id="contact">
        <h2>Ask a question</h2>
        <p className="sub">Not sure which course fits? Send a message and we will reply within two days.</p>
        <ContactForm />
      </section>
    </main>
  );
}
