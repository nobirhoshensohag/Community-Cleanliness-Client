import axios from "axios";

const instance = axios.create({
  baseURL: "https://community-cleanliness-server-one.vercel.app",
});
const useAxios = () => {
  return instance;
};

export default useAxios;