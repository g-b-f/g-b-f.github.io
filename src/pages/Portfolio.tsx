import './CSS/Portfolio.css';
import { DummyImage } from 'react-simple-placeholder-image'
import { LoremIpsum } from '../Utils';
import { motion } from "motion/react"
import type { ReactElement } from 'react';

function fade_in(contents: ReactElement, delay=0.3, duration=0.5): ReactElement{
    return (
    <motion.div
        className='image-text'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: duration, delay: delay }}>
        {contents}
    </motion.div>)
}

export default function Portfolio() {
    const lorem_ipsum = new LoremIpsum()
    return (
    <section className='portfolio'>
        <section className='hero'>
            <h1>Gabriel Birkbeck Frazer</h1>
            <h2>A good programmer, who is brilliant and smart (and made this website)</h2>
        </section>
        <section className='intro'>
            {fade_in(<>
                <p>{lorem_ipsum.first_paragraph}</p>
                <div className='images'>
                    <DummyImage width={2000} height={2000} shape='image' />
                </div>
            </>, 0)}
            {fade_in(<>
                <p>{lorem_ipsum.second_paragraph}</p>
                <div className='images'>
                    <DummyImage width={2000} height={2000} shape='avatar' />
                </div>
            </>)}
            {fade_in(<>
                <p>{lorem_ipsum.third_paragraph}</p>
                <div className='images'>
                    <DummyImage width={2000} height={2000} shape='image' />
                </div>
            </>)}
        </section>
    </section>
  );
}