import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const axiosInstance = axios.create({baseURL: API_URL});

export const getHeadcount = (email: string) =>
	axiosInstance.post('/headcount', { email });

export const getTurnover = (email: string) =>
	axiosInstance.post('/turnover', { email });
