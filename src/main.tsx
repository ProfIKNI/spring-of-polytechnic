import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./global.css";
import App from "./App.tsx";
import BuyTicketPage from "./pages/BuyTicketPage.tsx";

const router = createBrowserRouter([
  {
    path: '/spring-of-polytechnic/',
    element: <App />,
  },
  {
    path: '/spring-of-polytechnic/buy-ticket',
    element: <BuyTicketPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

