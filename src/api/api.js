import axios from "axios";
axios.defaults.baseURL = "http://34.64.69.238:8000";
axios.defaults.withCredentials = true;
export const api = async (method, url, data) => {
  const refreshToken = localStorage.getItem("refreshToken");
  const accessToken = localStorage.getItem("accessToken");
  const headers = refreshToken
    ? {
        RefreshToken: refreshToken,
        AccesToken: accessToken,
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
