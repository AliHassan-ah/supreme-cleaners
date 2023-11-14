import client from "./utils/apolloClient";
import { ApolloProvider } from "@apollo/client";
import router from "./routes";
import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </React.Fragment>
  );
}

export default App;
// import React from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Error404 from "./pages/Error404";
// import Home from "./components/home/index";
// import Services from "./pages/services/Services";
// import Prices from "./pages/Prices";
// import BusinessServices from "./pages/services/BusinessServices";
// import Blog from "./pages/Blogs/Blog";
// import SingleBlog from "./pages/Blogs/SingleBlog";
// import About from "./pages/About";
// import Footer from "./components/Footer";
// import Contact from "./pages/Contact";
// import Privacy from "./pages/Privacy";
// import RefundPolicy from "./pages/RefundPolicy";
// import TermAndConditions from "./pages/TermAndConditions";
// import FAQ from "./pages/FAQ";
// import Process from "./pages/Process";
// import Booking from "./pages/Booking";
// import WeddingDresses from "./pages/services/WeddingDresses";

// import LoginPage from "./pages/userPages/LoginPage";
// import Cart from "./pages/paymentPages/CartPage";
// import Checkout from "./pages/paymentPages/CheckOutPage";
// import { ApolloProvider } from "@apollo/client";
// import client from "./utils/apolloClient";
// import SingalService from "./pages/services/SingalService";
// import ThankYou from "./pages/paymentPages/ThankYou";
// import MyAccountPage from "./pages/userPages/MyAccountPage";
// import WhatsappWeight from "./components/WhatsappWeight";
// import BookingForm from "./pages/Booking/MultiStepForm";
// import Help from "./pages/userPages/Accountpages/Help";
// import Preferences from "./pages/userPages/Accountpages/Preferences";
// import PersonalInfo from "./pages/userPages/Accountpages/PersonalInfo";
// import RecurringBooking from "./pages/userPages/Accountpages/RecurringBooking";
// import ChangePassword from "./pages/userPages/ChangePassword";
// import Forgot from "./pages/userPages/Forgot";
// import Register from "./pages/userPages/Register";
// import Signup from "./pages/userPages/Signup";
// //Admin Pannel
// import AdminPannel from "./pages/AdminPannel";
// import AddService from "./pages/AdminPannel/AddService";
// export default function App() {
//   const location = useLocation();
//   return (
//     <>
//       {!location.pathname.includes("/admin-pannel") && <Navbar />}
//       <ApolloProvider client={client}>
//         <Routes>
//           <Route exact path="*" element={<Error404 />} />
//           <Route exact path="/" element={<Home />} />
//           <Route exact path="/home" element={<Home />} />
//           <Route exact path="/services" element={<Services />} />
//           <Route exact path="/prices" element={<Prices />} />
//           <Route
//             exact
//             path="/businessservices"
//             element={<BusinessServices />}
//           />
//           <Route exact path="/blog" element={<Blog />} />
//           <Route exact path="/blog/:slug" element={<SingleBlog />} />
//           <Route exact path="/about" element={<About />} />
//           <Route exact path="/contact" element={<Contact />} />
//           <Route exact path="/privacy" element={<Privacy />} />
//           <Route exact path="/refund-policy" element={<RefundPolicy />} />
//           <Route
//             exact
//             path="/terms-conditions"
//             element={<TermAndConditions />}
//           />
//           <Route exact path="/faq" element={<FAQ />} />
//           <Route exact path="/process" element={<Process />} />
//           <Route exact path="/booking" element={<Booking />} />
//           <Route exact path="/wedding-dresses" element={<WeddingDresses />} />

//           <Route exact path="/login" element={<LoginPage />} />
//           <Route exact path="/cart" element={<Cart />} />
//           <Route exact path="/checkout" element={<Checkout />} />
//           <Route exact path="/service/:slug" element={<SingalService />} />
//           <Route exact path="/success" element={<ThankYou />} />
//           <Route exact path="/account" element={<MyAccountPage />} />
//           <Route exact path="/booking-form" element={<BookingForm />} />

//           <Route exact path="/signup" element={<Signup />} />
//           <Route exact path="/register" element={<Register />} />
//           <Route exact path="/forgot-password" element={<Forgot />} />
//           <Route exact path="/change-password" element={<ChangePassword />} />
//           <Route exact path="/recurring" element={<RecurringBooking />} />
//           <Route exact path="/personal-info" element={<PersonalInfo />} />
//           <Route exact path="/preferences" element={<Preferences />} />
//           <Route exact path="/help-feedback" element={<Help />} />
//           <Route exact path="/admin-pannel" element={<AdminPannel />} />
//           <Route
//             exact
//             path="/admin-pannel/add-service"
//             element={<AddService />}
//           />
//         </Routes>
//         {!location.pathname.includes("/admin-pannel") && <WhatsappWeight />}
//       </ApolloProvider>
//       {!location.pathname.includes("/admin-pannel") && <Footer />}
//     </>
//   );
// }
