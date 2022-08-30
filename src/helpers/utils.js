const ISSERVER = typeof window === "undefined";

const getToken = () => {
  if (!ISSERVER) {
    return localStorage.getItem("AUTH_TOKEN");
  }
  return "";
};
const setToken = (token) => {
  if (!ISSERVER) {
    return localStorage.setItem("AUTH_TOKEN", token);
  }
  return "";
};

export { getToken, setToken };
