import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { ApolloProvider } from "@apollo/client";

import { AuthProvider } from "./contexts/Auth";
import App from "./App.tsx";
import Protected from "./pages/layout/Protected.tsx";
import Wines from "./pages/Wines.tsx";
import Login from "./pages/Login.tsx";
import client from "./services/client.ts";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Protected />,
    children: [
      {
        path: "wines",
        element: <Wines />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ApolloProvider>
  </StrictMode>
);
