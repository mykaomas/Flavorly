import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Signup from './pages/AccountSignup.jsx';
import Login from './pages/Login.jsx';
// import Profile from './pages/Vote';
import NotFound from './pages/NotFound';
import Profilepage from './pages/Profile'
import SearchList from './pages/SearchList.jsx';
import './header.css'
import './body.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Signup />
      }, {

        path: '/Login',
        element: <Login />
      },
      {
        path: '/Profile',
        element: <Profilepage />
      },
       {
        path: '/search',
        element: <SearchList />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
