import React, { type ReactElement } from "react"

export class SvgError extends Error {
    constructor(message: string) {
        super(message)
        this.name = "SvgError"
    }
}

export function recolour_svg(ref: React.RefObject<HTMLDivElement | null>, selector: string, colour:string) {
    const svg = ref.current?.querySelector("svg")
    if (!svg) throw new SvgError("SVG element not found in container")
    const elem = svg.querySelector<SVGElement>(selector)
    if (!elem) throw new SvgError("selector '" + selector + "' not found in SVG")
    elem.style.fill = colour
}

export function load_svg(svg_url: string, svg_container: React.RefObject<HTMLDivElement | null>): Promise<void> {
    return fetch(svg_url)
        .then((res) => res.text())
        .then((svgText) => {
            if (!svg_container.current) {
                throw new SvgError("SVG container not found")
            }
            svg_container.current.innerHTML = svgText
        })
}

// interface RenderSVGProps {
//     svg_url: string
//     class_name?: string
// }

// export function RenderSVG({ svg_url, class_name = "contact-link-image" }: RenderSVGProps): ReactElement {
//     const svgRef = useSVG(svg_url)
//     return <div ref={svgRef} className={class_name}></div>
// }

interface RenderSVGProps {
    svgRef: React.RefObject<HTMLDivElement | null>
    className: string
}

export function RenderSVG({ svgRef, className="contact-link-image" }: RenderSVGProps): ReactElement {
    return <div ref={svgRef} className={className}></div>
}

export class SVG {
    svg_url: string
    class_name: string

    constructor(svg_url: string, class_name = "contact-link-image") {
        this.svg_url = svg_url
        this.class_name = class_name
    }
}