import { RenderSVG } from "../utils/SVGtools"
import "../pages/CSS/Contact.css";

type ContactLinkType = {
  site: string;
  path: string;
  link: string;
}

const contact_links: ContactLinkType[] = [
  {
    site: "GitHub",
    path: "/assets/logos/GitHub.svg",
    link: "https://github.com/g-b-f/",
  },
  {
    site: "LinkedIn",
    path: "/assets/logos/LinkedIn.svg",
    link: "https://www.linkedin.com/in/gabebf/",
  }
]

export default function Contact() {
  return (
    <section className="contact">
      <section className="hero">
        <h1>Contact</h1>
        <h2>You can reach me at the following locations:</h2>
      </section>
      <section className="contact-links-grid">
        <br />
        {contact_links.map(({ site, path, link }) => (
          <a key={site + "_profile"} href={link} title={site + " profile" }>
            <RenderSVG svgUrl={path} className="contact-link-image" />
          </a>
        ))}
      </section>
    </section>
  );
}
