import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import Orcamento from './routes/Orcamento';
import Painel from './routes/Painel';
import PagamentoOrcamento from "./routes/PagamentoOrcamento";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "orcamento",
        element: <Orcamento />
      },
      {
        path: "painel",
        element: <Painel />
      },
      {
        path:"pagamento_orcamento/:id",
        element:<PagamentoOrcamento />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
