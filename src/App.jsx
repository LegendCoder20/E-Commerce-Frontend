import "./App.css";
import {ToastContainer} from "react-toastify";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Importing Main Components
import HomePage from "./pages/components/HomePage";
import ProductDetail from "./pages/product/ProductDetail";
import SellerDashboard from "./pages/seller/SellerDashboard";
import CartComponent from "./pages/product/CartComponent";
import AllData from "./pages/admin/AllData";

// Importing Forms
import RegisterUser from "./pages/user/RegisterUser";
import LoginUser from "./pages/user/LoginUser";
import RegisterSeller from "./pages/seller/RegisterSeller";
import LoginSeller from "./pages/seller/LoginSeller";
import AddProduct from "./pages/product/AddProduct";
import UpdateProduct from "./pages/product/UpdateProduct";
import CheckoutForm from "./pages/user/CheckoutForm";

// Importing Other Components
import Navbar from "./pages/components/Navbar";
import Footer from "./pages/components/Footer";
import AboutMe from "./pages/components/AboutMe";
import NotFoundPage from "./pages/components/NotFoundPage";
import ContactMe from "./pages/components/ContactMe";
import PaymentSuccess from "./pages/payment/PaymentSuccess";
import PaymentFailed from "./pages/payment/PaymentFailed";

function App() {
  return (
    <Router>
      <ToastContainer />
      <NavbarWithCondition />

      <Routes>
        {/*🟡Register User🟡*/}
        <Route path="/registerUser" element={<RegisterUser />}></Route>

        {/*🟡Login User🟡*/}
        <Route path="/loginUser" element={<LoginUser />}></Route>

        {/*🟡Register Seller🟡*/}
        <Route path="/registerSeller" element={<RegisterSeller />}></Route>

        {/*🟡Login Seller🟡*/}
        <Route path="/loginSeller" element={<LoginSeller />}></Route>

        {/*🟡Product Card🟡*/}
        <Route path="/" element={<HomePage />}></Route>

        {/*🟡Product Details Card🟡*/}
        <Route path="/productDetails/:id" element={<ProductDetail />}></Route>

        {/*🟡Seller Dashboard🟡*/}
        <Route path="/sellerDashboard" element={<SellerDashboard />}></Route>

        {/*🟡Add Product🟡*/}
        <Route path="/addProduct" element={<AddProduct />}></Route>

        {/*🟡Update Product🟡*/}
        <Route path="/updateProduct/:id" element={<UpdateProduct />}></Route>

        {/*🟡User Cart🟡*/}
        <Route path="/userCart" element={<CartComponent />}></Route>

        {/*🟡User Product Payment🟡*/}
        <Route path="/userCart/checkout" element={<CheckoutForm />}></Route>

        {/*🟡Payment Success | Payment Failure🟡*/}
        <Route
          path="/users/paymentSuccess"
          element={<PaymentSuccess />}
        ></Route>

        <Route path="/users/paymentFailed" element={<PaymentFailed />}></Route>

        {/*🟡Admin Page 🟡*/}
        <Route path="/allData/:value" element={<AllData />}></Route>

        {/*🟠OTHER ROUTES🟠*/}
        <Route path="/aboutme" element={<AboutMe />}></Route>
        <Route path="/contactme" element={<ContactMe />}></Route>

        {/* delete this */}

        {/*🔴WRONG URL🔴*/}
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

function NavbarWithCondition() {
  const location = useLocation();

  const noNavbarRoutes = [
    "/loginUser",
    "/registerUser",
    "/loginSeller",
    "/registerSeller",
  ];

  return !noNavbarRoutes.includes(location.pathname) && <Navbar />;
}

export default App;
