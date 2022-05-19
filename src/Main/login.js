import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import { toast } from "react-toastify";

export const loginSubmitHandeler = async (
  email,
  password,
  action,
  route,
  createCart,
  Cart,
  from
) => {
  const cred = { email, password };
  const act = await action(cred);

  if (Cart != {}) {
    createCart();
    console.log("created");
  }
  console.log(Cart);
  if (act == "Success") {
    route(from);
  }
};

export const signupSubmitHandler = (
  name,
  email,
  user_name,
  password,
  confirmPassword,
  is_admin,
  action,
  from,
  route
) => {
  const cred = { name, email, user_name, password, is_admin };
  if (password == confirmPassword) {
    action(cred);
    route(from);
  } else {
    toast.error("Passwords Do Not Match");
  }
};
