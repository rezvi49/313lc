// EDIT THIS FILE: all your content lives here.
export const site = {
  name: "313 Learning Center",
  tagline: "Learn it by building it.",
  intro: "Hands-on courses taught step by step. Pick a course and start your first lesson today.",
  whatsapp: "0000000000", // country code + number, no + or spaces
  email: "hello@313lc.example",
  phone: "+000 000 0000",
  address: "Your address here",
  social: [] // e.g. { label: "Instagram", href: "https://instagram.com/..." }
};

export const courses = [
  { slug: "foundations", title: "Foundations", level: "Beginner", duration: "6 weeks",
    summary: "Start from zero and finish with a real project.",
    lessons: ["Setting up your tools", "Core concepts, explained simply", "Your first project"] },
  { slug: "build-and-ship", title: "Build & Ship", level: "Intermediate", duration: "8 weeks",
    summary: "Turn ideas into working, published projects.",
    lessons: ["Planning a project", "Building with feedback", "Publishing your work"] },
  { slug: "studio-lab", title: "Studio Lab", level: "Advanced", duration: "10 weeks",
    summary: "Weekly live sessions and mentor reviews.",
    lessons: ["Live critique sessions", "Portfolio-grade capstone", "Career guidance"] }
];

export const waLink = (text) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
