import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;
export const api = async (method, url, data) => {
  const refreshToken = localStorage.getItem("RefreshToken");
  const accessToken = localStorage.getItem("AccessToken");
  const headers = refreshToken
    ? {
        RefreshToken: refreshToken,
        AccessToken: accessToken,
      }
    : {};
  const response = await axios({
    method,
    data,
    url,
    headers,
  });
  return response;
};
