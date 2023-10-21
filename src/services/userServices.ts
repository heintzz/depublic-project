export const getUserProfile = () => {
  const user = JSON.parse(localStorage.getItem("user-info") || "");
  return user;
};
