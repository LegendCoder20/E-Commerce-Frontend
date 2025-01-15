import axios from "axios";

const API_URL = "http://localhost:5000/api/user";

//🟨REGISTER USER FEATURE🟨//

const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  if (response.data) {
    localStorage.setItem("User", JSON.stringify(response.data));
  }
  return response.data;
};

//🟧REGISTER USER FEATURE🟧//

//🟨LOGIN USER FEATURE🟨//
//🟧LOGIN USER FEATURE🟧//

//🟨LOGOUT USER FEATURE🟨//
//🟧LOGOUT USER FEATURE🟧//

const userService = {
  register,
};

export default userService;
