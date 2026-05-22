import { Fragment, useState } from 'react';
import { isTouchScreen } from '../utils/Misc';


/**
* Defines the structure for programming language knowledge, including proficiency level and related libraries.
* - `level`: A number from 0 to 10 indicating proficiency in the language.
* - `libraries`: An array of strings listing libraries or frameworks associated with the language.
*/
export type LanguageInfo = {
  level: number;
  libraries: string[];
};

export function LanguageTable(props: Record<string, LanguageInfo>) {
  const [openLanguage, setOpenLanguage] = useState<string | null>(null);
  const languageEntries = Object.entries(props).sort(([, a], [, b]) => b.level - a.level);

  const toggleLanguage = (language: string) => {
    setOpenLanguage((current) => (current === language ? null : language));
  };

  return (
    <div className="languages">
      <table>
        <thead>
            <th colSpan={2}>
                Languages ({isTouchScreen ? "tap": "click"} to show libraries)
            </th>
        </thead>
        <tbody>
          {languageEntries.map(([language, info]) => (
            <Fragment key={language}>
              <tr className="language-row">
                <td>{language}</td>
                <td>
                  <progress
                    id={`${language}_progress`}
                    value={info.level}
                    max="10"
                    onClick={() => toggleLanguage(language)}
                    title="Click to view related libraries"
                  >
                    {info.level}
                  </progress>
                </td>
              </tr>
              <tr className={`language-libraries ${openLanguage === language ? 'open' : ''}`}>
                <td colSpan={2}>
                  <div className="library-dropdown">
                    <ul>
                      {info.libraries.map((lib) => (<li key={lib}>{lib}</li>))}
                    </ul>
                  </div>
                </td>
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}