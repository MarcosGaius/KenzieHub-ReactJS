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

export const getUserProfile = async (token) => {
  try {
    const response = await kenzieHubApi.get(`/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
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

export const createTech = async (data, token) => {
  try {
    const response = await kenzieHubApi.post(
      "/users/techs",
      { ...data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (e) {
    return e;
  }
};

export const updateTech = async (id, data, token) => {
  try {
    const response = await kenzieHubApi.put(
      `/users/techs/${id}`,
      { ...data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (e) {
    return e;
  }
};

export const deleteTech = async (id, token) => {
  try {
    const response = await kenzieHubApi.delete(`/users/techs/${id}`, { headers: { Authorization: `Bearer ${token}` } });
    return response;
  } catch (e) {
    return e;
  }
};
