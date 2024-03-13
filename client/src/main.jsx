import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import Signup from './pages/AccountSignup.jsx';
import Login from './pages/Login.jsx';
import NotFound from './pages/NotFound';
import Profilepage from './pages/Profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      }, {

        path: '/Signup',
        element: <Signup />
      }, 
      {
        path: '/Login',
        element: <Login />
      },
      {
        path: '/Profile',
        element: <Profilepage />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
