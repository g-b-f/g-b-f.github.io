import { Fragment, useState } from 'react';
import { tapOrClick, tapOrClickCap } from '../utils/Misc';
import { get_description, type LanguageTableProps } from './languages';

export function LanguageTable(props: LanguageTableProps) {
  const [openLanguage, setOpenLanguage] = useState<string | null>(null);
  const languageEntries = Object.entries(props).sort(([, a], [, b]) => b.level - a.level);

  const toggleLanguage = (language: string) => {
    setOpenLanguage((current) => (current === language ? null : language));
  };

  return (
    <div className="languages">
      <table>
        <thead>
            <tr>
                <th colSpan={2}>
                    Languages ({tapOrClick} to show libraries)
                </th>
            </tr>
        </thead>
        <tbody>
          {languageEntries.map(([language, info]) => (
            <Fragment key={language}>
              <tr className="language-row" onClick={() => toggleLanguage(language)} >
                <td>{language}</td>
                <td>
                  <progress
                    id={`${language}_progress`}
                    value={info.level}
                    max="10"
                    title={`${tapOrClickCap} to view related libraries`}
                    aria-label={get_description(info.level)}
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
