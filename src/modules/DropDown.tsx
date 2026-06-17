import { Fragment, useState } from "react";
import { tapOrClickCap } from "../utils/Misc";
import routes from "./Navigation";
import { type DropdownType } from "./Navigation";
import { NavLink } from "react-router-dom";

// TODO: dropdown CSS
// make version of .language-libraries.open .library-dropdown
import "../pages/CSS/Portfolio.css"



export function DropDown(props: DropdownType) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const menuEntries = Object.entries(props)

  const toggleLanguage = (language: string) => {
    setOpenMenu((current) => (current === language ? null : language));
  };

  return (
    <div className="languages">
      {menuEntries.map(([label, routes]) => (
        <Fragment key={label}>
          <nav className="nav-container">
          <nav
              className="nav-button"
              title={`${tapOrClickCap} to view items`}
              onClick={() => toggleLanguage(label)}
          >
            {label}
          </nav>
          <div className={`language-libraries ${openMenu === label ? 'open' : ''}`}>
            <div className="library-dropdown">
              {routes.filter(r => r.showInNav !== false).map((route) => (
                <NavLink
                    key={route.path}
                    to={route.path}
                    className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                    }
                >
                  <nav className="nav-button"> {route.label} </nav>
                </NavLink>
                ))}
              </div>
            </div>
          </nav>
        </Fragment>
      ))}
    </div>
  );
}
