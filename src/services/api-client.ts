import axios from 'axios'
import { AxiosRequestConfig } from 'axios';
const API_KEY = import.meta.env.VITE_API_KEY

export interface FetchResponse<T> {
    count: number;
    results: T[]
}
const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: API_KEY
    }
})

class APIClient<T>{
    endpoint: string;
    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data)
    }
}

export default APIClient
