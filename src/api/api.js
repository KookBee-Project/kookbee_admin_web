import axios from "axios";
// axios.defaults.baseURL = "http://34.64.173.178:9000";
axios.defaults.baseURL = "http://localhost:9000";
axios.defaults.withCredentials = true;
export const api = async (method, url, data) => {
  const refreshToken = localStorage.getItem("refreshToken");
  const headers = refreshToken
    ? {
        RefreshToken: refreshToken,
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
