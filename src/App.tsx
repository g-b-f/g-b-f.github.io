import './App.css'
import { Suspense } from 'react';
import { HashRouter, Routes, Route, NavLink } from 'react-router';

import routes from './modules/Navigation.tsx'

export default function App() {
  return (
    <HashRouter>
      <nav className="nav-container">
        {routes.filter(r => r.showInNav !== false).map((route) => (
          route.direct ? (
            <a
              key={route.path}
              href={route.path}
              className="nav-link"
            >
              <nav className="nav-button"> {route.label} </nav>
            </a>
          ) : (

          <NavLink
            key={route.path}
            to={route.path}
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }
          >
            <nav className="nav-button"> {route.label} </nav>
          </NavLink>

        )))}
      </nav>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map((route) => {
              if (!route.component) {
                if (route.direct) return null;
                throw new Error(`Route ${route.label} is not direct, but also does not have a component defined.`);
              }
              const Component = route.component;
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<Component />}
                />
              );
            })}
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </Suspense>
      </main>
    </HashRouter>
  );
}