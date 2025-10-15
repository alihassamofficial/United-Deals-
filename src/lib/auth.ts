export const isAuthenticated = () => {
  if (typeof window !== "undefined") {
    return !!localStorage.getItem("token"); // replace with cookie in prod
  }
  return false;
};
