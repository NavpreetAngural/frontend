import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 5000,
});

instance.interceptors.request.use(
    async (config) => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            if (accessToken) {
                config.headers = config.headers || {};
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
            // console.log(config)
            return config;
        } catch (error) { 
            console.error("Request Interceptor Error:", error);
            return config; // Still return config to avoid blocking the request
        }
    }
);

instance.interceptors.response.use(
    (response) => {
        console.log("Response:", response.data);
        return response;
    },
    (error) => {
        console.error("Response Error:", error);
        return Promise.reject(error); // Let the calling code handle the error
    }
);

export default instance;
