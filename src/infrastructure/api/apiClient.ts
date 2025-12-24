import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://api.yourdomain.com', // 🔁 change this
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * REQUEST INTERCEPTOR
 * Attach auth token here
 */
apiClient.interceptors.request.use(
  async config => {
    // Example:
    // const token = await getAccessToken();
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  error => Promise.reject(error),
);

/**
 * RESPONSE INTERCEPTOR
 * Handle global errors
 */
apiClient.interceptors.response.use(
  response => response,
  error => {
    // Example: handle 401 globally
    // if (error.response?.status === 401) logout();
    return Promise.reject(error);
  },
);
