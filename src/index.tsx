import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import Layout from "./components/Layout";
import Contacts from "./components/addressBook/Contacts";
import Map from "./components/chartsMap/Map";
import PageNotFound from "./components/PageNotFound";
const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Contacts />,
      },
      {
        path: "map",
        element: <Map />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
