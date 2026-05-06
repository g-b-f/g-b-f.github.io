import { lazy } from 'react';
const pages = import.meta.glob('../pages/*.tsx');

const lazyPage = (name: string) => lazy(pages[`../pages/${name}.tsx`] as any);

export const routes = [
  { path: "/", label: "Home", component: lazyPage("Home"), showInNav: false },
  { path: "/", label: "Home", component: lazyPage("Home") },
  { path: "/calculator", label: "Calculator", component: lazyPage("Calculator") },
  { path: "/solver", label: "Wordiply Solver", component: lazyPage("WordiplySolver")},
];