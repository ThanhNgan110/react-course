import axios from "axios";

export const httpRequest = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000
})

export function initRequest() {
  // Add a request interceptor
  httpRequest.interceptors.request.use(
    function (config) {
      // add show loading or headers or inject token
      console.log('axios interceptor request success: ', config)
      const access_token = window.localStorage.getItem('access_token');

      if (access_token) {
        config.headers['x-auth-token'] = access_token
      }
      return config;
    }, 
    function (error) {
      console.log('axios interceptor request failure: ', error)
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  httpRequest.interceptors.response.use(
    function onFulfilled(response) {
      console.log('axios interceptor reponse success: ', response)
      return response;
    }, 
    function onRejected(error) {
      console.log('axios interceptor reponse error: ', error)

      // handle request timeout
      if (error.code === 'ECONNABORTED') {
        // show popup timeout
      }

      // handle token expired
      if (error.response.status = 401) {
        // code logic refresh token
      }

      switch (error.response.status) {
        case 400: {
          // dispatch action popup 400
          break;
        }
        case 403: {
          // dispatch action popup 403
          break;
        }
        case 500: {
          // dispatch action popup 500
          break;
        }
        default:
          break;
      }

      // handle common errore
      return Promise.reject(error);
    }
  );
}