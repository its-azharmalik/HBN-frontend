import create from "zustand";
import axios from "axios";
import { toast } from "react-toastify";

let useStore = (set) => ({
  AllProducts: [],
  AllUsers: [],
  LoginUser: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  Product: {},
  AllReviews: [],
  AllReviewsById: [],
  ReviewByUserId: {},
  ReviewByReviewId: {},
  FeaturedProdById: {},
  CartDetails: [],
  AllCartDetailsById: {},
  LoginError: false,
  Cart: {},

  //

  getAllProduct: async () => {
    try {
      const res = await axios.get("/api/product/getproduct/");
      set({ AllProducts: res.data.data });
      return res;
    } catch (error) {}
  },

  deleteProduct: async (id) => {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          Authorization: `Bearer ${token.AccessToken}`,
        },
      };
      const res = await axios.delete(`/api/product/${id}`);
    } catch (error) {
      toast.error(error);
    }
  },

  getAllUsers: async () => {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          Authorization: `Bearer ${token.AccessToken}`,
        },
      };
      const res = await axios.get("/api/user/alluser", config, {});
      set({ AllUsers: res.data.data });
    } catch (error) {
      toast.error(error);
    }
  },

  fetchUser: async () => {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          Authorization: `Bearer ${token.AccessToken}`,
        },
      };
      const res = await axios.get("/api/user/fetchuser", config, {});
      return res;
    } catch (error) {
      toast.error(error.message);
    }
  },

  deleteUser: async (id) => {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          Authorization: `Bearer ${token.AccessToken}`,
        },
      };
      const res = await axios.delete(`/api/user/deleteuser/${id}`);
    } catch (error) {}
  },

  register: async (cred) => {
    try {
      const res = await axios.post("/api/auth/register", cred);
    } catch (error) {
      console.log("error");
    }
  },

  login: async (cred) => {
    try {
      const res = await axios.post("/api/auth/login", cred);
      localStorage.setItem("userInfo", JSON.stringify(res.data.data));
      set({ LoginUser: res.data.data, LoginError: false });
      return "Success";
    } catch (error) {
      set({
        LoginError:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  },

  addProduct: async (proddetails) => {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          Authorization: `Bearer ${token.AccessToken}`,
          "Content-Type": "multipart/form-data",
        },
      };

      const res = await axios.post(
        "/api/product/addproduct",
        proddetails,
        config
      );

      return res;
    } catch (error) {}
  },

  getProductById: async (id) => {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          Authorization: `Bearer ${token.AccessToken}`,
        },
      };
      const res = await axios.get(`/api/product/${id}`);
      // set({ Product: res.data.data });
      return res.data.data;
    } catch (error) {}
  },

  updateProduct: async (id, details) => {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          Authorization: `Bearer ${token.AccessToken}`,
        },
      };
      const res = await axios.patch(`/api/product/${id}`, details, config);
      return res;
    } catch (error) {
      return error;
    }
  },

  getAllReviews: async () => {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          Authorization: `Bearer ${token.AccessToken}`,
        },
      };
      const res = await axios.get("/api/reviews/getall");
      set({ AllReviews: res.data.data });
    } catch (error) {}
  },

  getAllReviewsById: async (id) => {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          Authorization: `Bearer ${token.AccessToken}`,
        },
      };
      const res = await axios.get(`/api/reviews/${id}`, config, {});
      set({ AllReviewsById: res.data.data });
      return res;
    } catch (error) {
      return error;
    }
  },

  addReviewsById: async (id, details) => {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          Authorization: `Bearer ${token.AccessToken}`,
        },
      };
      const res = await axios.post(`/api/reviews/${id}`, details, config);
      return res;
    } catch (error) {
      return error;
    }
  },

  updateReviewsById: async (prod_id, id, details) => {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          Authorization: `Bearer ${token.AccessToken}`,
        },
      };
      const res = await axios.put(`/api/reviews/${prod_id}/${id}`, details);
    } catch (error) {}
  },

  deleteReviewsById: async (prod_id, id, details) => {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          Authorization: `Bearer ${token.AccessToken}`,
        },
      };
      const res = await axios.delete(`/api/reviews/${prod_id}/${id}`);
    } catch (error) {}
  },

  getReviewsByUserId: async () => {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          Authorization: `Bearer ${token.AccessToken}`,
        },
      };
      const res = await axios.get(`/api/reviews/user_reviews`);
      set({ ReviewByUserId: res.data.data });
    } catch (error) {}
  },
  getReviewsByReviewId: async (id) => {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          Authorization: `Bearer ${token.AccessToken}`,
        },
      };
      const res = await axios.get(`/api/reviews/${id}`);
      set({ ReviewByReviewId: res.data.data });
    } catch (error) {}
  },
  addFeaturedProdById: async (id, details) => {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          Authorization: `Bearer ${token.AccessToken}`,
          "Content-Type": "multipart/form-data",
        },
      };
      const res = await axios.post(
        `/api/featured_product/${id}`,
        details,
        config
      );
      return res;
    } catch (error) {
      return error;
    }
  },
  getFeaturedProdById: async (pid, fpid) => {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          Authorization: `Bearer ${token.AccessToken}`,
        },
      };
      const res = await axios.get(`/api/featured_product/${pid}/${fpid}`);
      // set({ FeaturedProdById: res.data.data });
      return res.data.data;
    } catch (error) {}
  },
  updateFeaturedProduct: async (pid, fpid, details) => {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          Authorization: `Bearer ${token.AccessToken}`,
        },
      };
      const res = await axios.patch(
        `/api/featured_product/${pid}/${fpid}`,
        details,
        config
      );
      return res;
    } catch (error) {
      return error;
    }
  },
  deleteFeaturedProdById: async (prod_id, id, details) => {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          Authorization: `Bearer ${token.AccessToken}`,
        },
      };
      const res = await axios.delete(`}/api/featured_product/${prod_id}/${id}`);
    } catch (error) {}
  },
  getCartDetails: async () => {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          Authorization: `Bearer ${token.AccessToken}`,
        },
      };
      const res = await axios.get("/api/cart/getcart", config, {});
      set({ CartDetails: res.data.data });
      return res;
    } catch (error) {}
  },

  getAllCartDetailsById: async (id) => {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          Authorization: `Bearer ${token.AccessToken}`,
        },
      };
      const res = await axios.get(`/api/cart/${id}`);
      set({ AllCartDetailsById: res.data.data });
    } catch (error) {}
  },
  addOrderByCartId: async (details) => {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          Authorization: `Bearer ${token.AccessToken}`,
        },
      };
      const res = await axios.post(`/api/orders/createorder/`, details, config);
      return res;
    } catch (error) {}
  },

  getAllOrders: async () => {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          Authorization: `Bearer ${token.AccessToken}`,
        },
      };
      const res = await axios.post(`/api/orders/getallorder/`, {}, config);
      return res;
    } catch (error) {
      return error;
    }
  },
  updateOrderById: async (id, details) => {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          Authorization: `Bearer ${token.AccessToken}`,
        },
      };
      const res = await axios.patch(`/api/orders/${id}`, details);
    } catch (error) {}
  },

  getOrderById: async (id) => {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          Authorization: `Bearer ${token.AccessToken}`,
        },
      };
      const res = await axios.get(`/api/orders/${id}`, config, {});
      return res;
    } catch (error) {}
  },
  createCart: async () => {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          Authorization: `Bearer ${token.AccessToken}`,
        },
      };
      const res = await axios.post(`/api/cart/create`, {}, config);
      set({ Cart: res.data.data });
    } catch (error) {
      console.log(error);
    }
  },
  addToCart: async (fpid, pid, qty) => {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          Authorization: `Bearer ${token.AccessToken}`,
        },
      };
      console.log(fpid, pid, qty);
      const res = await axios.patch(
        `/api/cart/${pid}/${fpid}/add`,
        { quantity: qty },
        config
      );

      return res;
    } catch (error) {
      toast.error(error.message);
      return error;
    }
  },

  deleteCartItems: async (fpid, pid) => {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          Authorization: `Bearer ${token.AccessToken}`,
        },
      };
      console.log(fpid, pid);
      const res = await axios.patch(
        `/api/cart/${pid}/${fpid}/remove`,
        {},
        config
      );
      return res;
    } catch (error) {
      toast.error(error.message);
      return error;
    }
  },
});
// useStore = devtools(useStore);
export default useStore = create(useStore);
