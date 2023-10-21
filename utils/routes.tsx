import DetailPage from "pages/Detail.tsx";
import HomePage from "pages/Home";
import { LoginPage } from "pages/Login";
import { SignupPage } from "pages/Signup";
import TicketPage from "pages/Ticket";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/ticket" element={<TicketPage />} />
      <Route path="/ticket/:id" element={<DetailPage />} />
      <Route path="*" element={<TicketPage />} />
    </Route>
  )
);

export default router;
