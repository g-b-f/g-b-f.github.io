import "./CSS/Portfolio.css";
import { LanguageTable } from "../modules/LanguageTable";
import { languages } from "../modules/languages";


export default function Portfolio() {
  return (
    <section className="portfolio">
        <section className="hero">
          <h1>Gabriel Birkbeck Frazer</h1>
          <h2>Software engineer with experience in Data Science, Bio&shy;informatics,
            and Data Engin&shy;eering</h2>
        </section>
        <section className="intro">
          <div className="description">
            <p>
              Skilled in building large-scale applications, maintaining
              pipelines and software, implementing robust testing frameworks,
              and working in collaborative Agile environments.
              Strong advocate for code quality, testing, and
              collaborative Agile practices. Thrives in fast-paced environments,
              capable of quickly adapting to new technologies and domains,
              and eager to contribute to impactful projects.
            </p>
          </div>
          <LanguageTable {...languages} />
        </section>
        <br></br>
        <i className="WIP-disclaimer">
          This portfolio is very much a work in progress,
          but in the meantime you're welcome to look at the mini webapps
          I've made, above.
        </i>
    </section>
  );
}
