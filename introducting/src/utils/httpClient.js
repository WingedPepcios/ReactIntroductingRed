const httpRequest = async (endpoint, method, body, config) => {
  const res = await fetch(endpoint, config || {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : null,
  });

  return res;
}

export default httpRequest;

const httpMiddleware = async (...params) => {
  try {
    return await httpRequest(...params).json();
  } catch (err) {
    console.log(err);
  }
}

export const http = {
  get: (endpoint) => httpMiddleware(endpoint, 'GET'),
  post: (endpoint, body) => httpMiddleware(endpoint, 'POST', body),
  put: (endpoint, body) => httpMiddleware(endpoint, 'PUT', body),
}