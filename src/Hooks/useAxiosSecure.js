import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { useNavigate } from "react-router";

const instance = axios.create({
  baseURL: "https://community-cleanliness-server-one.vercel.app",
});

const useAxiosSecure = () => {
  const { signOutFunc } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Request Interceptor (no token)
    const requestInterceptor = instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (err) => Promise.reject(err)
    );

    // Response Interceptor
    const responseInterceptor = instance.interceptors.response.use(
      (res) => res,
      (err) => {
        const status = err.response?.status;

        if (status === 401 || status === 403) {
          signOutFunc().then(() => {
            navigate("/login"); // better than /register
          });
        }

        return Promise.reject(err);
      }
    );

    return () => {
      instance.interceptors.request.eject(requestInterceptor);
      instance.interceptors.response.eject(responseInterceptor);
    };
  }, [navigate, signOutFunc]);

  return instance;
};

export default useAxiosSecure;
