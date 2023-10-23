import DetailPage from "pages/Detail.tsx";
import HomePage from "pages/Home";
import { LoginPage } from "pages/Login";
import { SignupPage } from "pages/Signup";
import TicketPage from "pages/Ticket";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { tokenServices } from "services/token.services";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/signup"
        element={<SignupPage />}
        loader={() => tokenServices.redirectToHome()}
      />
      <Route path="/login" element={<LoginPage />} loader={() => tokenServices.redirectToHome()} />
      <Route path="/ticket" element={<TicketPage />} />
      <Route path="/ticket/:id" element={<DetailPage />} />
      <Route path="*" element={<>Not found</>} />
    </Route>
  )
);

export default router;
