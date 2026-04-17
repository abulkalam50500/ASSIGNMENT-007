import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import DataProvider from "./context/DataProvider";
import { Bounce, ToastContainer } from "react-toastify";

import { RouterProvider } from "react-router";
import { router } from "./router/router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <RouterProvider router={router}></RouterProvider>
    </DataProvider>
  </StrictMode>,
);
