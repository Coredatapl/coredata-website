import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./components/App.tsx";
import Privacy from "./components/Privacy.tsx";
import Terms from "./components/Terms.tsx";
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
		element: <Privacy />,
	},
	{
		path: "/terms",
		element: <Terms />,
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
