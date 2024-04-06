import { createHashRouter } from 'react-router-dom';
import App from '../App';
import Layout from '../layout/Layout';
import Login from '../features/pages/login/Login';
import Index from '../features/pages/index/Index';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    // loader: justForTest,
    children: [
      {
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Index />,
          },
        ],
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
]);

export default router;

// function justForTest() {
//   const isTokenExisted = localStorage.getItem('token');
//   if (!isTokenExisted) return redirect('/login');
//   return isTokenExisted;
// }
