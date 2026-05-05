import './App.css'
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom';
import Calculator from './pages/Calculator';
import Home from './pages/Home';

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/calculator", label: "Calculator" },
];

function App() {
  return (
    <HashRouter>
    <nav className="nav-container">
        {navLinks.map((link) => (
          <NavLink  to={link.path} className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          {/* Fallback route for 404s */}
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;