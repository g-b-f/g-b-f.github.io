import React, { useEffect, useRef, useState } from 'react';

const svgUrl = "/assets/London-boroughs.svg"



export default function LondonBoroughs() {

    const containerRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        fetch(svgUrl)
        .then((res) => res.text())
        .then((svgText) => {
            if (containerRef.current) {
                    containerRef.current.innerHTML = svgText;      

            const svgElement = containerRef.current.querySelector('svg');
            if (svgElement) {
                svgElement.style.width = '100%';
                svgElement.style.height = 'auto';
            }
        }
        })
    }, [svgUrl]);

    return (
        <div>
            <h1>London Boroughs Picker</h1>
            <div ref={containerRef} style={{ border: '1px solid black', marginBottom: '20px' }}></div>
        </div>
    );
}