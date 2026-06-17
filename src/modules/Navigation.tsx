import { lazy } from 'react';

const pages = import.meta.glob('../pages/*.tsx');
const lazyLoad = (name: string) => lazy(pages[`../pages/${name}.tsx`] as any);

export type RouteType = {
  path: string;
  label: string;
  component: React.ComponentType;
  showInNav?: boolean;
};

export type DropdownType = Record<string, RouteType[]>
//   string:
//   routes: RouteType[]
// }

const routes: RouteType[] = [
  { path: "/", label: "Home", component: lazyLoad("Portfolio") },
  { path: "/contact", label: "Contact", component: lazyLoad("Contact") },
  { path: "/london", label: "Boroughs Picker", component: lazyLoad("LondonBoroughs")},
  { path: "/example", label: "Dropdown Example", component: lazyLoad("DropdownExample")},
  // { path: "/portfolio", label: "Portfolio", component: lazyLoad("Portfolio"), showInNav: false },
  { path: "/solver", label: "Wordiply Solver", component: lazyLoad("WordiplySolver")},
];


export const routes_dropdown: DropdownType =
  { "Projects": [
      { path: "/london", label: "Boroughs Picker", component: lazyLoad("LondonBoroughs")},
      { path: "/solver", label: "Wordiply Solver", component: lazyLoad("WordiplySolver")}
    ]
  };

export default routes