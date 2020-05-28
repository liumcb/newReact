import axios from 'axios';

export const MethodType = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH:'PATCH'
};

/**
 * 模块说明:有api_token的请求
 */
export const request = (api, params = {}, method = MethodType.POST, config = {}) => {
  // const apiToken = '************';
  const data = (method === 'GET') ? 'params' : 'data';
  let headers = {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json'
    // 'Authorization': `Bearer ${apiToken}`
  };
  if (config.headers) {
    headers = {
      ...headers,
      ...config.headers
    }
  }
  return new Promise((resolve, reject) => {
    axios({
      url: api,
      method: method,
      [data]: params,
      headers
    }).then((res) => {
      resolve(res && res.data);
    }).catch((error) => {
        console.dir(error);
        console.log(typeof error.response.data === 'string' ? error.response.data : JSON.stringify(error.response.data))
        reject(error);
      });
  });
};
