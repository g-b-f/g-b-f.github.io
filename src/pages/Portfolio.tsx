import './CSS/Portfolio.css';

const languages = {
  "Python": 10,
  "Java": 7,
  "C/ C++": 7,
  "Bash": 8,
  "React": 5
}

function LanguageTable(props: Record<string, number>) {
  const languageEntries = Object.entries(props).sort((a, b) => b[1] - a[1]);
  return (
    <table>
      <tbody>
        {languageEntries.map(([language, value]) => (
          <tr key={language}>
            <td>{language}</td>
            <td>
              <progress id={language + "_progress"} value={value} max="10">{value}</progress>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

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
          <div className="languages">
            {/* <h3>Programming languages</h3> */}
            <LanguageTable {...languages} />
          </div>
        </section>
        <br></br>
        <i>
          This portfolio is very much a work in progress,
          but in the meantime you're welcome to look at the mini webapp
          projects I've made, above.
        </i>
    </section>
  );
}
