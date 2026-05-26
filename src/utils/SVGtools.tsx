import React, { type ReactElement, useEffect, useRef } from "react"

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

interface RenderSVGProps {
    svgUrl: string
    className?: string
}

export function RenderSVG({ svgUrl, className = "contact-link-image" }: RenderSVGProps): ReactElement {
    const svgRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (!svgRef.current || svgRef.current.querySelector("svg")) {
            return
        }

        load_svg(svgUrl, svgRef).catch((error) => {
            console.error("Unable to load SVG:", error)
        })
    }, [svgUrl])

    return <div ref={svgRef} className={className} />
}

export class SVG {
    svg_url: string
    class_name: string

    constructor(svg_url: string, class_name = "contact-link-image") {
        this.svg_url = svg_url
        this.class_name = class_name
    }
}
