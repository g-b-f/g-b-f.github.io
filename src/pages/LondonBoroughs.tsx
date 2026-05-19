import { useEffect, useRef, useState } from "react"

const SVG_URL = "/assets/London-boroughs.svg"
const ITERATIONS = 10

class SvgError extends Error {
    constructor(message: string) {
        super(message)
        this.name = "SvgError"
    }
}

export default function LondonBoroughs() {
    const [selected_borough, set_selected_borough] = useState("")
    const svgContainer = useRef<HTMLDivElement>(null)
    const [lock, set_lock] = useState(false)
    const sleep = (ms:number) => new Promise(r => setTimeout(r, ms))

    function get_random_borough(svg: SVGElement): string {
        const boroughsGroup = select_svg_by_id(svg, "Boroughs")
        const boroughs = Array.from(boroughsGroup.children)
        
        const randomIndex = Math.floor(Math.random() * boroughs.length)
        const ret = boroughs[randomIndex].id
        console.debug("picked random borough: " + ret)
        return ret
    }

    function reset_svg(svg: SVGElement) {
        const boroughsGroup = select_svg_by_id(svg, "Boroughs")
        const boroughs = Array.from(boroughsGroup.children) as SVGElement[]
        for (const borough of boroughs) {
            borough.style.fill = ""
            borough.style.stroke = ""
            borough.style.strokeWidth = ""
        }
    }

    function select_svg_by_id(svg: SVGElement, id: string): SVGElement {
        const elem = svg.querySelector<SVGElement>("#" + id)
        if (!elem) throw new SvgError("id '" + id + "' not found in SVG")
        return elem
    }

    function get_svg_element(): SVGElement{
        const svgElement = svgContainer.current?.querySelector("svg")
        if (!svgElement) throw new SvgError("SVG element not found")
        return svgElement
    }

    function select_borough(){	
        const svgElement = get_svg_element()
        const borough = get_random_borough(svgElement)
        reset_svg(svgElement)
        select_svg_by_id(svgElement, borough).style.fill = "red"
        return borough
    }
    
    async function visual_pick(){
        if (lock) return
        let borough = ""
        set_lock(true)
        set_selected_borough("")
        for (let i = 0; i < ITERATIONS; i++) {
            await sleep(100)
            borough  = select_borough()
        }
        set_selected_borough(borough)
        set_lock(false)
    }

    useEffect(() => {
        fetch(SVG_URL).then((res) => res.text()).then((svgText) => {
            if (!svgContainer.current) throw new SvgError("SVG container not found")
            svgContainer.current.innerHTML = svgText
        })
    }, [])
    
    return (
        <div>
            <section className="hero">
                <h1>London Boroughs Picker</h1>
                <h2>Where in London should I visit?</h2>
            </section>
            <button 
                onClick={async () => await visual_pick()}
                disabled={lock}
            >Pick a random borough</button>
            {
            selected_borough ? 
            <p>You should visit: <strong>{selected_borough.replaceAll("_"," ")}</strong></p> :
            <p><br></br></p>
            }
            <div className="fullScreen-svg" ref={svgContainer}></div>
        </div>
    )
}
