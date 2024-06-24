import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "cal-sans";
import React from "react";
import AircraftsPage from "./pages/AircraftsPage.tsx";
import EnginesPage from "./pages/EnginesPage.tsx";
import MissilesPage from "./pages/MissilesPage.tsx";
import ShipsPage from "./pages/ShipsPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage title="Error" subtitle="Page not found" />,
  },
  {
    path: "/aircrafts",
    element: <AircraftsPage />,
  },
  {
    path: "/engines",
    element: <EnginesPage />,
  },
  {
    path: "/missiles",
    element: <MissilesPage />,
  },
  {
    path: "/ships",
    element: <ShipsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
