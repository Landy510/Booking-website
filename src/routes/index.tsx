import { createHashRouter, redirect } from 'react-router-dom';
import App from '../App';
import Layout from '../layout/Layout';
import Login from '../features/pages/Login/Login';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    loader: isAuthentic,
    children: [
      {
        index: true,
        element: <Layout />,
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
]);

export default router;

function isAuthentic() {
  const isTokenExisted = localStorage.getItem('token');
  if (!isTokenExisted) return redirect('/login');
  return isTokenExisted;
}
