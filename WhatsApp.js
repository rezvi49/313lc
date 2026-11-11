import { waLink } from "../lib/site";
export default function WhatsApp({ text = "Hi 313 Learning Center, I want to know more about your courses." }) {
  return (
    <a className="wa" href={waLink(text)} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/><path d="M8.5 7.5c0 4 4 8 8 8l1.2-1.8-2.2-1.3-1 .8c-1.2-.5-2.5-1.8-3-3l.8-1-1.3-2.2z"/></svg>
      <span>Chat on WhatsApp</span>
    </a>
  );
}
