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
  AllOrders: [],

  // https://hbn-host.azurewebsites.net/

  getAllProduct: async () => {
    try {
      const res = await axios.get(
        "https://hbn-host.herokuapp.com/api/product/getproduct/"
      );
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
      const res = await axios.delete(
        `https://hbn-host.herokuapp.com/api/product/${id}`,
        config,
        {}
      );
      return res;
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
      const res = await axios.get(
        "https://hbn-host.herokuapp.com/api/user/alluser",
        config,
        {}
      );
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
      const res = await axios.get(
        "https://hbn-host.herokuapp.com/api/user/fetchuser",
        config,
        {}
      );
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
      const res = await axios.delete(
        `https://hbn-host.herokuapp.com/api/user/deleteuser/${id}`
      );
    } catch (error) {}
  },

  register: async (cred) => {
    try {
      const res = await axios.post(
        "https://hbn-host.herokuapp.com/api/auth/register",
        cred
      );
      console.log(res);
    } catch (error) {
      console.log("error");
      toast.error(error);
    }
  },

  login: async (cred) => {
    try {
      const res = await axios.post(
        "https://hbn-host.herokuapp.com/api/auth/login",
        cred
      );
      console.log(res);
      localStorage.setItem("userInfo", JSON.stringify(res.data.data.data));
      set({ LoginUser: res.data.data.data, LoginError: false });
      return res;
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
        "https://hbn-host.herokuapp.com/api/product/addproduct",
        proddetails,
        config
      );

      return res;
    } catch (error) {}
  },

  getProductById: async (id) => {
    try {
      const res = await axios.get(
        `https://hbn-host.herokuapp.com/api/product/${id}`
      );
      // set({ Product: res.data.data });
      return res.data.data;
    } catch (error) {
      return { error };
    }
  },

  updateProduct: async (id, details) => {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          Authorization: `Bearer ${token.AccessToken}`,
        },
      };
      const res = await axios.patch(
        `https://hbn-host.herokuapp.com/api/product/${id}`,
        details,
        config
      );
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
      const res = await axios.get(
        "https://hbn-host.herokuapp.com/api/reviews/getall"
      );
      set({ AllReviews: res.data.data });
    } catch (error) {}
  },

  getAllReviewsById: async (id) => {
    try {
      const res = await axios.get(
        `https://hbn-host.herokuapp.com/api/reviews/${id}`
      );
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
      const res = await axios.post(
        `https://hbn-host.herokuapp.com/api/reviews/${id}`,
        details,
        config
      );
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
      const res = await axios.put(
        `https://hbn-host.herokuapp.com/api/reviews/${prod_id}/${id}`,
        details
      );
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
      const res = await axios.delete(
        `https://hbn-host.herokuapp.com/api/reviews/${prod_id}/${id}`
      );
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
      const res = await axios.get(
        `https://hbn-host.herokuapp.com/api/reviews/user_reviews`
      );
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
      const res = await axios.get(
        `https://hbn-host.herokuapp.com/api/reviews/${id}`
      );
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
        `https://hbn-host.herokuapp.com/api/featured_product/${id}`,
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
      const res = await axios.get(
        `https://hbn-host.herokuapp.com/api/featured_product/${pid}/${fpid}`
      );
      // set({ FeaturedProdById: res.data.data });
      return res.data.data;
    } catch (error) {}
  },
  getAllFeaturedProducts: async (pid, fpid) => {
    try {
      const res = await axios.get(
        `https://hbn-host.herokuapp.com/api/featured_product/${pid}/${fpid}`
      );
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
        `https://hbn-host.herokuapp.com/api/featured_product/${pid}/${fpid}`,
        details,
        config
      );
      return res;
    } catch (error) {
      return error;
    }
  },
  deleteFeaturedProdById: async (prod_id, id) => {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          Authorization: `Bearer ${token.AccessToken}`,
        },
      };
      const res = await axios.delete(
        `https://hbn-host.herokuapp.com/api/featured_product/${prod_id}/${id}`,
        config
      );
      return res;
    } catch (error) {
      return error;
    }
  },
  getCartDetails: async () => {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          Authorization: `Bearer ${token.AccessToken}`,
        },
      };
      const res = await axios.get(
        "https://hbn-host.herokuapp.com/api/cart/getcart",
        config,
        {}
      );
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
      const res = await axios.get(
        `https://hbn-host.herokuapp.com/api/cart/${id}`
      );
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
      const res = await axios.post(
        `https://hbn-host.herokuapp.com/api/orders/createorder/`,
        details,
        config
      );
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
      const res = await axios.post(
        `https://hbn-host.herokuapp.com/api/orders/getallorder/`,
        {},
        config
      );

      set({ AllOrders: res });
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
      const res = await axios.patch(
        `https://hbn-host.herokuapp.com/api/orders/${id}`,
        details
      );
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
      const res = await axios.get(
        `https://hbn-host.herokuapp.com/api/orders/${id}`,
        config,
        {}
      );
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
      const res = await axios.post(
        `https://hbn-host.herokuapp.com/api/cart/create`,
        {},
        config
      );
      set({ Cart: res.data.data });
    } catch (error) {
      console.log(error);
    }
  },
  addToCart: async (fpid, pid, qty, guest, AuthToken) => {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo"));
      if (guest) {
        const config = {
          headers: {
            Authorization: `Bearer ${AuthToken}`,
          },
        };
        console.log(fpid, pid, qty, guest, AuthToken);
        const res = await axios.patch(
          `https://hbn-host.herokuapp.com/api/cart/${pid}/${fpid}/add`,
          { quantity: qty },
          config
        );

        return res;
      } else {
        const config = {
          headers: {
            Authorization: `Bearer ${token.AccessToken}`,
          },
        };
        console.log(fpid, pid, qty, guest, AuthToken);
        const res = await axios.patch(
          `https://hbn-host.herokuapp.com/api/cart/${pid}/${fpid}/add`,
          { quantity: qty },
          config
        );

        return res;
      }
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
        `https://hbn-host.herokuapp.com/api/cart/${pid}/${fpid}/remove`,
        {},
        config
      );
      return res;
    } catch (error) {
      toast.error(error.message);
      return error;
    }
  },

  updateUser: async (id, details) => {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          Authorization: `Bearer ${token.AccessToken}`,
        },
      };
      const res = await axios.patch(
        `https://hbn-host.herokuapp.com/api/user/updateuser/${id}`,
        details,
        config
      );
      return res;
    } catch (error) {
      return error;
    }
  },
});
// useStore = devtools(useStore);
export default useStore = create(useStore);
