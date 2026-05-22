import "./CSS/Portfolio.css";
import { LanguageTable, type LanguageInfo } from "../modules/LanguageTable";

const languages: Record<string, LanguageInfo> = {
  Python: { level: 10, libraries: [
    "pandas", "numpy", "scikit-learn", "matplotlib", "pytest", "flask"
  ] },
  Java: { level: 7, libraries: ["Spring", "mockito", "JUnit", "Maven"] },
  "C/C++": { level: 7, libraries: ["platformio"] },
  Bash: { level: 8, libraries: ["GNU coreutils"] },
  React: { level: 5, libraries: ["React Router", "Vite"] },
  SQL: { level: 4.5, libraries: ["PostgreSQL", "MySQL", "SQLite"] }
};


export default function Portfolio() {
  return (
    <section className="portfolio">
        <section className="hero">
            <h1>Gabriel Birkbeck Frazer</h1>
            <h2>Software engineer with experience in Data Science, Bioinformatics,
              and Data Engineering</h2>
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
        <i>
          This portfolio is very much a work in progress,
          but in the meantime you"re welcome to look at the mini webapps
          I"ve made, above.
        </i>
    </section>
  );
}
