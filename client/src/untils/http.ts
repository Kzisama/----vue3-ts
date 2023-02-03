import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

const request = axios.create({
	baseURL: "base",
	timeout: 20000,
});

// 添加请求拦截器
request.interceptors.request.use(
	function (config: InternalAxiosRequestConfig) {
		// 在发送请求之前做些什么
		return config;
	},
	function (error) {
		// 对请求错误做些什么
		return Promise.reject(error);
	}
);

// 添加响应拦截器
request.interceptors.response.use(
	function (response: AxiosResponse) {
		// 对响应数据做点什么
		return response.data.data;
	},
	function (error) {
		// 对响应错误做点什么
		return Promise.reject(error);
	}
);

export default request;
