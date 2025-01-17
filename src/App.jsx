import "./App.css";
import {ToastContainer} from "react-toastify";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Importing Components
import RegisterUser from "./pages/user/RegisterUser";
import LoginUser from "./pages/user/LoginUser";

function App() {
  return (
    <>
      <Router>
        <ToastContainer></ToastContainer>
        <Routes>
          {/*🟡 Register */}
          <Route
            path="/registerUser"
            element={<RegisterUser></RegisterUser>}
          ></Route>
          {/* Register */}

          {/*🟡 Login */}
          <Route path="/loginUser" element={<LoginUser></LoginUser>}></Route>
          {/* Login */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
