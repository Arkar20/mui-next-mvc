import axios from "axios";

export const cancelTokenSource = axios.CancelToken.source();

const debug = process.env.NODE_ENV === "development";

const axiosApiInstance = axios.create();
// in server or client
const ISSERVER = typeof window === "undefined";

axios.defaults.baseURL = process.env.URL;

const getToken = () => {
  if (!ISSERVER) {
    return localStorage.getItem("AUTH_TOKEN");
  }
  return "";
};
export const setAuthToken = (token) => {
  if (!ISSERVER) {
    return localStorage.setItem("AUTH_TOKEN", token);
  }
  return "";
};

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async (config) => {
    const token = getToken();
    // eslint-disable-next-line no-param-reassign
    config.headers = {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    };

    // eslint-disable-next-line no-param-reassign
    config.cancelToken = cancelTokenSource.token;

    if (debug) {
      console.log(`Request -> ${config.method} -> ${config.url} `, config.data);
    }

    return config;
  },
  (error) => {
    if (debug) {
      console.log(
        `Response -> Error  -> ${error.response.config.method} -> ${error.response.config.url} `,
        error.response.data
      );
    }

    Promise.reject(error);
  }
);

// Response interceptor for API calls
axiosApiInstance.interceptors.response.use(
  (response) => {
    console.log(
      `Response -> ${response.config.method} -> ${response.config.url} `,
      response.data
    );

    return response;
  },
  async (error) => {
    if (debug) {
      console.log(
        `Response -> Error  -> ${error.response.config.method} -> ${error.response.config.url} `,
        error.response.data
      );
    }

    Promise.reject(error);
  }
);

export default axiosApiInstance;
