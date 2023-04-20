import axios from "axios";
// axios.defaults.baseURL = "http://34.64.173.178:9000";
axios.defaults.withCredentials = true;
export const api_user = async (method, url, data) => {
  axios.defaults.baseURL = "http://localhost:9000";
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

export const api_bootcamp = async (method, url, data) => {
  axios.defaults.baseURL = "http://localhost:9100";
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
