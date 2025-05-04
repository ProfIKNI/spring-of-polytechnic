import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./global.css";
import App from "./App.tsx";
import BuyTicketPage from "./pages/BuyTicketPage.tsx";
import HologramPage from "./pages/HologramPage.tsx";
import PlanetsPage from "./pages/PlanetsPage/PlanetsPage.tsx";
import MainMenuPage from "./pages/MainMenuPage.tsx";

const router = createBrowserRouter([
  {
    path: "/spring-of-polytechnic/",
    element: <App />,
  },
  {
    path: "/spring-of-polytechnic/buy-ticket",
    element: <BuyTicketPage />,
  },
  {
    path: "/spring-of-polytechnic/hologram",
    element: <HologramPage />,
  },
  {
    path: "/spring-of-polytechnic/planets",
    element: <PlanetsPage />,
  },
  {
    path: "/spring-of-polytechnic/main-menu",
    element: <MainMenuPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
