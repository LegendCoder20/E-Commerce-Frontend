import axios from "axios";

const API_URL = "http://localhost:5000/api/user";

//🟨REGISTER USER FEATURE🟨//

const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  if (response.data) {
    localStorage.setItem("User", response.data.token);
  }
  return response.data;
};

//🟨LOGIN USER FEATURE🟨//
const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  if (response.data) {
    localStorage.setItem("User", response.data.token);
  }
  return response.data;
};

//🟨GET USER FEATURE🟨//
const getUser = async () => {
  const token = localStorage.getItem("User");

  if (token) {
    const response = await axios.get(`${API_URL}/getuser`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.user;
  }

  return "Guest User";
};

//🟨LOGOUT USER FEATURE🟨//

const userService = {
  register,
  login,
  getUser,
};

export default userService;
