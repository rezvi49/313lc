import { Unbounded, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import SceneLoader from "../components/SceneLoader";
import WhatsApp from "../components/WhatsApp";
import { site } from "../lib/site";

const display = Unbounded({ subsets: ["latin"], weight: ["500", "700"], variable: "--display" });
const body = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500"], variable: "--body" });

export const metadata = {
  title: site.name,
  description: site.intro,
  metadataBase: new URL("https://313lc.com") // change to your real domain
};
export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <SceneLoader />
        <nav>
          <a href="/" className="logo">{site.name.toUpperCase()}</a>
          <div>
            <a href="/#courses">Courses</a><a href="/#about">About</a>
            <a className="btn mini" href="/#contact">Enroll now</a>
          </div>
        </nav>
        {children}
        <footer>© 2026 {site.name} · {site.email} · {site.phone}</footer>
        <WhatsApp />
      </body>
    </html>
  );
}
