import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { SignupPage } from "../pages/Signup";
import { LoginPage } from "../pages/Login";
import HomePage from "../pages/Home/index.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route
        path="/login"
        element={<LoginPage />}
        // loader={() => {
        //   const user = localStorage.getItem("user");
        //   if (user) {
        //     return redirect("/");
        //   }
        //   return null;
        // }}
      />
    </Route>
  )
);

export default router;
