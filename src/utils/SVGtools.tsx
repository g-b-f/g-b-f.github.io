import React, { useEffect, createRef, type ReactElement } from "react"

export class SvgError extends Error {
    constructor(message: string) {
        super(message)
        this.name = "SvgError"
    }
}

export function recolour_svg(svg: SVGElement, selector: string, colour:string) {
    const elem = svg.querySelector<SVGElement>(selector)
    if (!elem) throw new SvgError("selector '" + selector + "' not found in SVG")
    elem.style.fill = colour
}

function useSVG(svg_url: string): React.RefObject<HTMLDivElement | null> {
    const svg_container = React.useRef<HTMLDivElement>(null)
    useEffect(() => {
        fetch(svg_url).then((res) => res.text()).then((svgText) => {
            if (!svg_container.current) {throw new SvgError("SVG container not found")}
            svg_container.current.innerHTML = svgText
        })
    }, [svg_url])
    return svg_container
}

interface RenderSVGProps {
    svg_url: string
    class_name?: string
}

export function RenderSVG({ svg_url, class_name = "contact-link-image" }: RenderSVGProps): ReactElement {
    const svgRef = useSVG(svg_url)
    return <div ref={svgRef} className={class_name}></div>
}