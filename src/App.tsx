import './App.css'
import { Suspense } from 'react';
import { HashRouter, Routes, Route, NavLink } from 'react-router';

import { routes } from './modules/navigation.tsx'

function App() {
  return (
    <HashRouter>
      <nav className="nav-container">
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
      </nav>

      <main style={{ padding: '1.5rem' }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map((route) => {
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

export default App;