import { Fragment, useState } from "react";
import { tapOrClickCap } from "../utils/Misc";
import routes from "./Navigation";
import { type DropdownType } from "./Navigation";


export function DropDown(props: DropdownType) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const menuEntries = Object.entries(props)

  const toggleLanguage = (language: string) => {
    setOpenMenu((current) => (current === language ? null : language));
  };

  return (
    <div className="languages">
      <table>
        <thead>
            <tr>
                {/* <th colSpan={2}>
                    Languages ({tapOrClick} to show libraries)
                </th> */}
            </tr>
        </thead>
        <tbody>
          {menuEntries.map(([label, routes]) => (
            <Fragment key={label}>
              <tr className="language-row" onClick={() => toggleLanguage(label)} >
                <td>{label}</td>
                <td title={`${tapOrClickCap} to view items`}>{label}
                </td>
              </tr>
              <tr className={`language-libraries ${openMenu === label ? 'open' : ''}`}>
                <td colSpan={2}>
                  <div className="library-dropdown">
                    <ul>
                      {routes.map((r) => (<li key={r.label}>{r.label}</li>))}
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
