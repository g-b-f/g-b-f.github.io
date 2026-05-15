import './CSS/Portfolio.css';
import { DummyImage } from 'react-simple-placeholder-image'
import { LoremIpsum } from '../utils/Misc';
import FadeIn from '../modules/FadeIn';

export default function Portfolio() {
    const lorem_ipsum = new LoremIpsum()
    return (
    <section className='portfolio'>
        <section className='hero'>
            <h1>Gabriel Birkbeck Frazer</h1>
            <h2>A good programmer, who is brilliant and smart (and made this website)</h2>
        </section>
        <section className='intro'>
            <FadeIn className='image-text' delay={0}>
              <p>{lorem_ipsum.first_paragraph}</p>
              <div className='images'>
                <DummyImage width={2000} height={2000} shape='image' />
              </div>
            </FadeIn>
            <FadeIn className='image-text'>
              <p>{lorem_ipsum.second_paragraph}</p>
              <div className='images'>
                <DummyImage width={2000} height={2000} shape='avatar' />
              </div>
            </FadeIn>
            <FadeIn className='image-text'>
              <p>{lorem_ipsum.third_paragraph}</p>
              <div className='images'>
                <DummyImage width={2000} height={2000} shape='image' />
              </div>
            </FadeIn>
        </section>
    </section>
  );
}