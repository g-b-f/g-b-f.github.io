import { lazy } from 'react';
const pages = import.meta.glob('../pages/*.tsx');

const lazyPage = (name: string) => lazy(pages[`../pages/${name}.tsx`] as any);

export const routes = [
  { path: "/", label: "Home", component: lazyPage("Home") },
  { path: "/portfolio", label: "Portfolio", component: lazyPage("Portfolio") },
  { path: "/calculator", label: "Calculator", component: lazyPage("Calculator"), showInNav: false },
  { path: "/solver", label: "Wordiply Solver", component: lazyPage("WordiplySolver")},
];