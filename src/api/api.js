import axios from "axios";

axios.defaults.baseURL = "http://34.64.69.238:8000";
// axios.defaults.baseURL = "http://127.0.0.1:8000";

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
