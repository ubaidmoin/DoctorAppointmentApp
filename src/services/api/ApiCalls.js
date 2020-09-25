// import { getData, postData, putData } from "./ApiCore";
import { get, post, put } from 'axios';
import { settings as s } from "../Settings";

// const getUrl = ep => `http://wwapp:5000${ep}`;
const getUrl = ep => `${s.baseUrl}${ep}`;

export const getData = async (relativeUrl, user) => {
  const url = getUrl(relativeUrl);

  const options = {
    headers: {
      Authorization: 'Bearer ' + user.token,
      Accept: 'text/plain'
    }
  };
  try {
    const response = await get(url, options)
      .then(res => res);
    return { status: response.status, data: response.data};
  } catch (err) {
    return { status: null, data: [] };
  }
};

// export const postData = async (relativeUrl, user, data) => {
//   const url = getUrl(relativeUrl);
//   const options = {
//     headers: {
//       Authorization: 'Bearer ' + user.token,
//       'Content-Type': 'application/json',
//       Accept: 'text/plain'
//     }
//   };
//   const response = await post(url, data, options);

//   return response;
// };

// export const getAllProducts = async (user, clientId) => {
//   const url = getUrl(`/api/ShopifyIntegration/GetAllProducts/${clientId}`);
//   const response = await fetch(url, {
//     method: 'GET',
//     headers: {
//       Authorization: 'Bearer ' + user.token,
//       Accept: 'text/plain'
//     }
//   })
//     .then(res => res.json())
//     .then(res => res)
//     .catch(error => []);

//   return response;
// };

// export const syncProducts = async (user, clientId) => {
//   const url = getUrl(`/api/ShopifyIntegration/SyncStore/${clientId}`);
//   const options = {
//     headers: {
//       Authorization: 'Bearer ' + user.token,
//       Accept: 'text/plain'
//     }
//   };
//   const response = await get(url, options)
//         .then(res => res.data);

//   return response;
// };

export const postData = async (relativeUrl, user, data) => {
  const url = getUrl(relativeUrl);
  const headers = {
    Authorization: 'Bearer ' + user.token,
    'Content-Type': 'application/json-patch+json',
    Accept: 'text/plain'
  };
  const response = await fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(res => res)
    .catch(error => error);

  return response;
};

export const putData = async (relativeUrl, user, data) => {
  const url = getUrl(relativeUrl);

  const options = {
    headers: {
      Authorization: 'Bearer ' + user.token,
      'Content-Type': 'application/json-patch+json',
      Accept: 'text/plain'
    }
  };

  try {
    const response = await put(url, JSON.stringify(data), options)
      .then(res => res)
      .catch(error => error);          
    console.log(response.status);
    return { status: response.status };
  } catch (err) {
    return { status: null };
  }
};
