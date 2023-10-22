import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

import Inicio from './routes/Inicio';
import Error from './routes/Error';
import Contacto from './routes/Contacto';
import Sobre from './routes/Sobre';
import Aluguer from './routes/Aluguer';
import Autocaravanas from './routes/Autocaravanas';
/* const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/contact",
    element: <Contact/>
  }
]) */

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      { 
      index: true, 
      element: <Navigate to="/inicio" replace /> 
      },
      {
      path: "/inicio",
      element: <Inicio/>
      },
      {
      path: "/contacto",
      element: <Contacto/>
      },
      {
      path: "/aluguer",
      element: <Aluguer/>
      },
      {
      path: "/autocaravanas",
      element: <Autocaravanas/>
      },
      {
      path: "/sobre",
      element: <Sobre/>
      },
    ]
  },

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

