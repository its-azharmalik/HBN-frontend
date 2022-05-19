export const checkAuth = () => {
  const token = JSON.parse(localStorage.getItem("userInfo"));
  if (token) {
    if (token.AccessToken.length > 10 && token.email.includes("@")) {
      return true;
    }
  }
  return false;
};

export const checkAdmin = () => {
  if (checkAuth()) {
    const token = JSON.parse(localStorage.getItem("userInfo"));
    if (token.is_admin) {
      return true;
    } else return false;
  } else return false;
};
