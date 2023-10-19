import App from "../App.tsx";
import { redirect, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { SignupPage } from "../pages/Signup";
import { LoginPage } from "../pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={<App />}
        loader={() => {
          const user = localStorage.getItem("user");
          if (!user) {
            return redirect("/login");
          }
          return null;
        }}
      />
      <Route
        path="/signup"
        element={<SignupPage />}
        loader={() => {
          const user = localStorage.getItem("user");
          if (user) {
            return redirect("/");
          }
          return null;
        }}
      />
      <Route
        path="/login"
        element={<LoginPage />}
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

export default router;
