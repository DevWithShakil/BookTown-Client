import { createBrowserRouter } from 'react-router-dom';
import Home from "../pages/Home";
import AllBooks from "../pages/AllBooks";
import EditBook from "../pages/EditBook";
import PrivateRoute from "./PrivateRoute";
import BookDetails from "../pages/BookDetails";
import SignUp from "../pages/Signup";
import Login from "../pages/Login";
import Notfound from "../pages/Notfound";
import App from '../App';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/all-books',
        element: <PrivateRoute><AllBooks /></PrivateRoute>,
      },
      {
        path: '/book-details/:id',
        element: <BookDetails />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/edit-book/:id',
    element: <PrivateRoute><EditBook /></PrivateRoute>,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '*',
    element: <Notfound />,
  },
]);

export default routes;




