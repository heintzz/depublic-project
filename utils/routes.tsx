import DetailPage from "pages/Detail.tsx";
import HomePage from "pages/Home";
import { LoginPage } from "pages/Login";
import { SignupPage } from "pages/Signup";
import TicketPage from "pages/Ticket";
import { createBrowserRouter, createRoutesFromElements, redirect, Route } from "react-router-dom";
import { getUserProfile } from "../src/services/userServices";
import { Response } from "../src/types/response.type";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/signup"
        element={<SignupPage />}
        loader={() => {
          const user: Response = getUserProfile();
          if (user.state.isLogin) {
            return redirect("/");
          }
          return null;
        }}
      />
      <Route
        path="/login"
        element={<LoginPage />}
        loader={() => {
          const user: Response = getUserProfile();
          if (user.state.isLogin) {
            return redirect("/");
          }
          return null;
        }}
      />
      <Route path="/ticket" element={<TicketPage />} />
      <Route path="/ticket/:id" element={<DetailPage />} />
      <Route path="*" element={<TicketPage />} />
    </Route>
  )
);

export default router;
