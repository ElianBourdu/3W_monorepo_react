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



const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />,
    children: [
      {
        path:'user/:id',
        element: <User />
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
