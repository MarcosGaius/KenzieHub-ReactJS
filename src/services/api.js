import axios from "axios";

export const kenzieHubApi = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  timeout: 5000,
});

export const logUserIn = async (data) => {
  try {
    const response = await kenzieHubApi.post("/sessions", data);
    return response;
  } catch (e) {
    return e;
  }
};

export const getUserData = async (id) => {
  try {
    const response = await kenzieHubApi.get(`/users/${id}`);
    return response;
  } catch (e) {
    return e;
  }
};

export const registerUser = async (data) => {
  try {
    const response = await kenzieHubApi.post("/users", data);
    return response;
  } catch (e) {
    return e;
  }
};
