import Calculator from '../pages/Calculator';
import Home from '../pages/Home';

/* 
  * TODO:
  * Lazy loading pages:
  * const Calculator = React.lazy(() => import('./pages/calculator'));
  * Then wrap Routes in <Suspense>
*/

export const routes = [
  { path: "/", label: "Home", element: <Home /> },
  { path: "/calculator", label: "Calculator", element: <Calculator /> },
  { path: "/test", element: <Home />, showInNav: false},
];