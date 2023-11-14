import Layout from "../layout";
// import ClientPanel from "../layout/clientpanel";

import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/index";
import Error404 from "../pages/Error404";
import Services from "../components/home/Services";
import Prices from "../pages/Prices";
import BusinessServices from "../pages/services/BusinessServices";
import Blog from "../pages/Blogs/Blog";
import SingleBlog from "../pages/Blogs/SingleBlog";
import About from "../pages/About";
import Contact from "../pages/Contact";
import RefundPolicy from "../pages/RefundPolicy";
import TermAndConditions from "../pages/TermAndConditions";
import FAQ from "../pages/FAQ";
import Process from "../pages/Process";
import Booking from "../pages/Booking";
import WeddingDresses from "../pages/services/WeddingDresses";
import LoginPage from "../pages/userPages/LoginPage";
import Cart from "../pages/paymentPages/CartPage";
import CheckOut from "../pages/paymentPages/CheckOutPage";
import SingalService from "../pages/services/SingalService";
import ThankYou from "../pages/paymentPages/ThankYou";
import MyAccountPage from "../pages/userPages/MyAccountPage";
import BookingForm from "../pages/Booking/MultiStepForm";
import Signup from "../pages/userPages/Signup";
import Register from "../pages/userPages/Register";
import Forgot from "../pages/userPages/Forgot";
import ChangePassword from "../pages/userPages/ChangePassword";
import RecurringBooking from "../pages/userPages/Accountpages/RecurringBooking";
import PersonalInfo from "../pages/userPages/Accountpages/PersonalInfo";
import Preferences from "../pages/userPages/Accountpages/Preferences";
import Help from "../pages/userPages/Accountpages/Help";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <Error404 />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/prices",
        element: <Prices />,
      },
      {
        path: "/businessservices",
        element: <BusinessServices />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:slug",
        element: <SingleBlog />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/refund-policy",
        element: <RefundPolicy />,
      },
      {
        path: "/terms-conditions",
        element: <TermAndConditions />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/process",
        element: <Process />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "/wedding-dresses",
        element: <WeddingDresses />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <CheckOut />,
      },
      {
        path: "/service/:slug",
        element: <SingalService />,
      },
      {
        path: "/success",
        element: <ThankYou />,
      },
      {
        path: "/account",
        element: <MyAccountPage />,
      },
      {
        path: "/booking-form",
        element: <BookingForm />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forgot-password",
        element: <Forgot />,
      },
      {
        path: "/change-password",
        element: <ChangePassword />,
      },
      {
        path: "/recurring",
        element: <RecurringBooking />,
      },
      {
        path: "/personal-info",
        element: <PersonalInfo />,
      },
      {
        path: "/preferences",
        element: <Preferences />,
      },
      {
        path: "/help-feedback",
        element: <Help />,
      },
    ],
  },
]);

export default router;
