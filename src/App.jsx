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
import Cart from "./pages/product/Cart";

// Importing Forms
import RegisterUser from "./pages/user/RegisterUser";
import LoginUser from "./pages/user/LoginUser";
import RegisterSeller from "./pages/seller/RegisterSeller";
import LoginSeller from "./pages/seller/LoginSeller";
import AddProduct from "./pages/product/AddProduct";

// Importing Other Components
import Navbar from "./pages/components/Navbar";
import Footer from "./pages/components/Footer";
import AboutMe from "./pages/components/AboutMe";
import NotFoundPage from "./pages/components/NotFoundPage";
import ContactMe from "./pages/components/ContactMe";

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
        <Route
          path="/productDetails/:id"
          element={<ProductDetail></ProductDetail>}
        ></Route>

        {/*🟡Seller Dashboard🟡*/}
        <Route path="/sellerDashboard" element={<SellerDashboard />}></Route>

        {/*🟡Add Product🟡*/}
        <Route path="/addProduct" element={<AddProduct />}></Route>

        {/*🟡User Cart🟡*/}
        <Route path="/userCart" element={<Cart />}></Route>

        {/*🟠OTHER ROUTES🟠*/}
        <Route path="/aboutme" element={<AboutMe />}></Route>
        <Route path="/contactme" element={<ContactMe />}></Route>

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
