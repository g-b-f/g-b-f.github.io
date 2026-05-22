import { isDarkMode } from "../utils/Misc"
import "../pages/CSS/Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <section className="hero">
        <h1>Contact</h1>
        <h2>You can reach me at the following locations</h2>
      </section>
      <section className="contact-links-grid">
        <br></br>
        <div className="contact-link-image">
          <a href="https://github.com/g-b-f/">
            <img src={ isDarkMode ? 
              "/assets/logos/GitHub_White.svg" : "/assets/logos/GitHub_Black.svg"} />
          </a>
        </div>
        <div className="contact-link-image">
          <a href="https://www.linkedin.com/in/gabebf/">
            <img src={"/assets/logos/LinkedIn.svg"} />
          </a>
        </div>
        {/* <div className="contact-link">email</div> */}
      </section>
    </section>
  );
}