import { lazy } from 'react';
const pages = import.meta.glob('../pages/*.tsx');

const lazyPage = (name: string) => lazy(pages[`../pages/${name}.tsx`] as any);

type Route = {
  path: string;
  label: string;
  component: React.ComponentType;
  showInNav?: boolean;
};

export const routes: Route[] = [
  { path: "/", label: "Home", component: lazyPage("Home") },
  { path: "/portfolio", label: "Portfolio", component: lazyPage("Portfolio"), showInNav: false },
  { path: "/solver", label: "Wordiply Solver", component: lazyPage("WordiplySolver")},
];