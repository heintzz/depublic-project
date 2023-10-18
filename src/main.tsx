import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
  redirect,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./global.css";
import { Signup } from "./pages/signup/Signup.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={<App />}
        loader={() => {
          const user = localStorage.getItem("user");
          if (!user) {
            return redirect("/signup");
          }
          return null;
        }}
      />
      <Route
        path="/signup"
        element={<Signup />}
        loader={() => {
          const user = localStorage.getItem("user");
          if (user) {
            return redirect("/");
          }
          return null;
        }}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
