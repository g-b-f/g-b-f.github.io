import { Fragment, useState } from "react";
import { tapOrClickCap } from "../utils/Misc";
import { type DropdownType } from "./Navigation";
import { NavLink } from "react-router-dom";

export function DropDown(props: DropdownType) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const menuEntries = Object.entries(props)

  const toggleLanguage = (language: string) => {
    setOpenMenu((current) => (current === language ? null : language))
  };

  return (
    <nav className="nav-container">
      {menuEntries.map(([label, routes]) => (
        <Fragment key={label}>
          <nav
            className="nav-button"
            title={`${tapOrClickCap} to view items`}
            onClick={() => toggleLanguage(label)}
          >
            {label}
          </nav>
          <div
            className={`dropdown-container ${openMenu === label ? "open" : ""}`}
          >
            <div className="dropdown-links">
              {routes
                .filter((r) => r.showInNav !== false)
                .map((route) => (
                  <NavLink
                    key={route.path}
                    to={route.path}
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    <nav className="nav-button"> {route.label} </nav>
                  </NavLink>
                ))}
            </div>
          </div>
        </Fragment>
      ))}
    </nav>
  );
}
