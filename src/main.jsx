import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import FundingPhases from "./pages/FundingPhases.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/funding", element: <FundingPhases /> }
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
