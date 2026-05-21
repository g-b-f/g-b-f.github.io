import { lazy } from 'react';
const pages = import.meta.glob('../pages/*.tsx');

const lazyLoad = (name: string) => lazy(pages[`../pages/${name}.tsx`] as any);

type RouteType = {
  path: string;
  label: string;
  component: React.ComponentType;
  showInNav?: boolean;
};

export const routes: RouteType[] = [
  { path: "/", label: "Home", component: lazyLoad("Portfolio") },
  { path: "/london", label: "Boroughs Picker", component: lazyLoad("LondonBoroughs")},
  // { path: "/portfolio", label: "Portfolio", component: lazyLoad("Portfolio"), showInNav: false },
  { path: "/solver", label: "Wordiply Solver", component: lazyLoad("WordiplySolver")},
];