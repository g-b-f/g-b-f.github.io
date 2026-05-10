import './CSS/Portfolio.css';
import { LoremIpsum } from '../Utils';

export default function Portfolio() {
  return (
    <section>
      <div id='intro'>
        <h1>Gabriel Birkbeck Frazer</h1>
        <h2>A good programmer, who is brilliant and smart (and made this website)</h2>
      </div>

    <div id='description'>
        <p>{new LoremIpsum().ipsum_text}</p>
    </div>
    </section>
  );
}
