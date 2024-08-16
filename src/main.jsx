import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Signup from './components/Auth/Signup.jsx';
import Login from './components/Auth/Login.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';
import Home from './components/Home/Home.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/signup",
        element: <Signup></Signup>
      },
      {
        path: "/signin",
        element: <Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
