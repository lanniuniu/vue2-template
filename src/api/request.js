import axios from "axios";
import { UserApi } from "@/enums/user";

// 创建 axios 实例
const service = axios.create({
  /* 基础地址 一般都是动态的 */
  baseURL: "https://dailyminiapp-backend-production.up.railway.app",
  /* 请求类型定义 */
  // headers: {
  //   'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  // },
  /* 如果用的JSONP，可以配置此参数带上cookie凭证，如果是代理和CORS不用设置 */
  withCredentials: false,
  /* 请求超时时间 */
  timeout: 6000,
});

/**
 * http request 拦截器
 */
service.interceptors.request.use(
  (config) => {
    const { url } = config;
    if (url !== UserApi.LOGIN) {
      const token = localStorage.getItem("access_token"); /* 获取token */
      if (token) {
        /* 让每个请求携带自定义 token 请根据实际情况自行修改 */
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    }
    if (config.method === "get") {
      /* 让每个请求都携带一个不同的时间参数，防止浏览器缓存不发送请求 */
      config.params = {
        ...config.params,
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * http response 拦截器
 */
service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log("请求出错：", error);
    return Promise.reject(error);
  }
);

export default service;