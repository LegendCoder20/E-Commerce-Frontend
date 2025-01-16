import "./App.css";
import RegisterUser from "./pages/user/RegisterUser";
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer></ToastContainer>
      <RegisterUser></RegisterUser>
    </>
  );
}

export default App;
