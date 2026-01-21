import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./components/App.tsx";
import Document from "./components/Document.tsx";
import ErrorBoundary from "./components/ui/ErrorBoundary.tsx";
import NotFound from "./components/ui/NotFound.tsx";

import "./assets/css/index.css";
import "./assets/css/fonts.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/privacy",
    element: <Document type="privacy" />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/terms",
    element: <Document type="terms" />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "*",
    element: <NotFound />,
    errorElement: <ErrorBoundary />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
