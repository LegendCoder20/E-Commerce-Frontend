import "./App.css";
import {ToastContainer} from "react-toastify";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Importing Components
import RegisterUser from "./pages/user/RegisterUser";
import LoginUser from "./pages/user/LoginUser";
import RegisterSeller from "./pages/seller/RegisterSeller";
import LoginSeller from "./pages/seller/LoginSeller";

function App() {
  return (
    <>
      <Router>
        <ToastContainer></ToastContainer>
        <Routes>
          {/*🟡Register User🟡*/}
          <Route
            path="/registerUser"
            element={<RegisterUser></RegisterUser>}
          ></Route>

          {/*🟡Login User🟡*/}
          <Route path="/loginUser" element={<LoginUser></LoginUser>}></Route>

          {/*🟡Register Seller🟡*/}
          <Route
            path="/registerSeller"
            element={<RegisterSeller></RegisterSeller>}
          ></Route>

          {/*🟡Login Seller🟡*/}
          <Route
            path="/loginSeller"
            element={<LoginSeller></LoginSeller>}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
