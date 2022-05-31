import Axios from 'axios';

function interceptorsRequest(config) {
  return config;
}

function interceptorsResponse(response) {
  return response;
}

export function useRequest() {
  const axios = Axios.create({
    baseURL:import.meta.env.VITE_WEB_REQUEST_URL,
    timeout:import.meta.env.VITE_WEB_TIMEOUT,
  })
  
  axios.interceptors.request.use(interceptorsRequest);
  axios.interceptors.response.use(interceptorsResponse);


  return axios;
}