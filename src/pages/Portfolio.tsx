import './CSS/Portfolio.css';
import { LoremIpsum } from '../Utils';

export default function Portfolio() {
  return (
    <section className='portfolio'>
        <section className='hero'>
            <h1>Gabriel Birkbeck Frazer</h1>
            <h2>A good programmer, who is brilliant and smart (and made this website)</h2>
        </section>
        <section className='intro'>
            <p>{new LoremIpsum().paragraphs(1)}</p>
            <div className='images'>
                // TODO: add images
            </div>
        </section>
    </section>
  );
}