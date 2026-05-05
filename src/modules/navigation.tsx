import { NavLink } from 'react-router-dom';


import Calculator from '../pages/Calculator';
import Home from '../pages/Home';

export const routes = [
  { path: "/", label: "Home", element: <Home /> },
  { path: "/calculator", label: "Calculator", element: <Calculator /> },
  { path: "/test", element: <Home />, showInNav: false},
];