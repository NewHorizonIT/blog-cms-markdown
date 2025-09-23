import axios from "axios";

import { getSession } from "next-auth/react";

const axiosInstance = axios.create({
  baseURL: "/api",
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const session = await getSession();
    config.headers.Authorization = `Bear ${session?.accessToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
