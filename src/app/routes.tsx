import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { BookingPage } from "./pages/BookingPage";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsAndConditions } from "./pages/TermsAndConditions";
import { RefundPolicy } from "./pages/RefundPolicy";
import { ContactUs } from "./pages/ContactUs";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "services", Component: ServicesPage },
      { path: "services/:serviceId", Component: ServicesPage },
      { path: "book/:serviceId", Component: BookingPage },
      { path: "privacy-policy", Component: PrivacyPolicy },
      { path: "terms-and-conditions", Component: TermsAndConditions },
      { path: "refund-policy", Component: RefundPolicy },
      { path: "contact", Component: ContactUs },
    ],
  },
]);