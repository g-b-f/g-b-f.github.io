import { useEffect, useRef, useState } from 'react';

const svgUrl = "/assets/London-boroughs.svg"
const ITERATIONS = 10

export default function LondonBoroughs() {
    const [selected_borough, set_selected_borough] = useState("")
    const svgContainer = useRef<HTMLDivElement>(null);
    const sleep = (ms:number) => new Promise(r => setTimeout(r, ms));


    function get_random_borough(svg: SVGElement): string {
        const boroughsGroup = svg.querySelector<SVGElement>('#Boroughs');
        if (!boroughsGroup) { throw new Error("SVG does not contain a group with id 'Boroughs'"); }
        const boroughs = Array.from(boroughsGroup.children);

        console.log('got ' + boroughs.length + ' boroughs from SVG');
        if (boroughs.length === 0) throw new Error("No boroughs found in SVG");

        const randomIndex = Math.floor(Math.random() * boroughs.length);
        const ret = boroughs[randomIndex].id;
        console.log('picked random borough: ' + ret);
        return ret;
    }

    function reset_svg(svg: SVGElement) {
        if (!boroughsGroup) { throw new Error("SVG does not contain a group with id 'Boroughs'"); }
        const boroughs = Array.from(boroughsGroup.children) as SVGElement[]
        for (const borough of boroughs) {
            borough.style.fill = '';
            borough.style.stroke = '';
            borough.style.strokeWidth = '';
        }
    }

    function highlight_borough(svg: SVGElement, boroughName: string) {
        const borough = svg.querySelector<SVGElement>('#' + boroughName);
        if (!borough) throw new Error("Borough with id '" + boroughName + "' not found in SVG");
        borough.style.fill = 'red';
        borough.style.stroke = 'black';
        // borough.style.strokeWidth = '5px';
    }

    function load_svg() {
        fetch(svgUrl)
        .then((res) => res.text())
        .then((svgText) => {
            if (!svgContainer.current){throw new Error("SVG container not found");}
                svgContainer.current.innerHTML = svgText;      
                const svgElement = get_svg_element()
                svgElement.style.width = '100%';
                svgElement.style.height = 'auto';
        })
    }

    function get_svg_element(): SVGElement{
        const svgElement = svgContainer.current?.querySelector('svg');
        if (!svgElement) { throw new Error("SVG element not found"); }
        return svgElement
    }

    function select_borough(){	
        const svgElement = get_svg_element()
        const borough = get_random_borough(svgElement);
        reset_svg(svgElement)
        highlight_borough(svgElement, borough);
        set_selected_borough(borough);
    }

    useEffect(() => load_svg, [svgUrl]);
    return (
        <div>
            <h1>London Boroughs Picker</h1>
            <div ref={svgContainer} style={{ border: '1px solid black', marginBottom: '20px' }}></div>
            <button onClick={() => {
		for (let i = 0; i < ITERATIONS; i++) {
		    await sleep(500)
		    select_borough()
		}
            }}
            >Pick a random borough</button>
            {selected_borough && <p>You should visit: <strong>{selected_borough}</strong></p>}
        </div>
    );
}
