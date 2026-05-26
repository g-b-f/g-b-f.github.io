import { isDarkMode } from "../utils/Misc"
import { RenderSVG, load_svg, recolour_svg } from "../utils/SVGtools"

import "../pages/CSS/Contact.css";
import { useEffect, useRef } from "react";

const SVG_URL = "/assets/logos/LinkedIn.svg"

export default function Contact() {
  const linkedIn = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = linkedIn.current
    if (!container) {
      return
    }

    if (!container.querySelector("svg")) {
      console.log("ref is not null, loading...")
      load_svg(SVG_URL, linkedIn)
        .then(() => {
          console.log("SVG loaded, recolouring...")
          recolour_svg(linkedIn, ".filled", "red")
        })
        .catch((error) => {
          console.error("SVG load/recolour failed:", error)
        })
    } else {
      console.log("ref is not null, recolouring...")
      recolour_svg(linkedIn, ".filled", "red")
    }
  }, [])

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
        <RenderSVG svgRef={linkedIn} className="contact-link-image" />
      </section>
    </section>
  );
}