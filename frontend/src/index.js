import React from 'react';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store';
import Home from "./pages/Home";
import User from './pages/User';
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path:'user/:id',
    element: <User />
  },
  {
    path:'signup',
    element: <Signup />
  },
  {
    path:'login',
    element: <Login />
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
