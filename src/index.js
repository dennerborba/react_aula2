import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Cadastro from './components/cadastro';
import Consulta from './components/consulta';

const rotas = createBrowserRouter([
   {
    path:"/",
    element: <App />,
    children: [
      {path: '/contato/cadastrar', element: <Cadastro /> },
      {path: '/contato/consultar', element: <Consulta />}
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={rotas} />
  </React.StrictMode>
);


