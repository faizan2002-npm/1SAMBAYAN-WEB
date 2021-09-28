const axios = require("axios");
const qs = require("querystring");
//DEV
const baseURL = "http://localhost:3000";
//Production
// const baseURL = "https://sambayan-dev.herokuapp.com";

export const postRequest = async (url, body = {}, headers = {}) => {
  let xform = qs.stringify(body);

  // if(baseURL=='https://api.volatia.com/api/WorkOrders/Create')

  let config = {
    headers: {
      "Content-Type": "application/x-www-form-ur	lencoded",
      ...headers,
    },
  };

  let returnValue;

  await axios
    // baseURL +
    .post(baseURL + url, xform, config)
    .then((result) => {
      returnValue = { result: result, error: null };
    })
    .catch((err) => {
      returnValue = { result: null, error: err };
    });
  return returnValue;
};

export const postRequestForm = async (url, token, body = {}, headers = {}) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...headers,
    },
  };

  let returnValue;

  await axios
    // baseURL +
    .post(baseURL + url, body, config)
    .then((result) => {
      returnValue = { result: result, error: null };
    })
    .catch((err) => {
      returnValue = { result: null, error: err };
    });
  return returnValue;
};

export const postWithParams = async (url, token, params = {}, headers = {}) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/x-www-form-urlencoded",
      ...headers,
    },
    params: {
      ...params,
    },
  };

  let returnValue;

  await axios
    // baseURL +
    .post(baseURL + url, {}, config)
    .then((result) => {
      returnValue = { result: result, error: null };
    })
    .catch((err) => {
      returnValue = { result: null, error: err };
    });
  return returnValue;
};

export const getRequest = async (url, token, params = {}, headers = {}) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/x-www-form-urlencoded",
      ...headers,
    },
    params: {
      ...params,
    },
  };

  let returnValue;

  await axios
    // baseURL +
    .get(baseURL + url, config)
    .then((result) => {
      returnValue = { result: result, error: null };
    })
    .catch((err) => {
      returnValue = { result: null, error: err };
    });
  return returnValue;
};

export const putRequest = async (url, token, body = {}, headers = {}) => {
  // let xform = qs.stringify(body)
// console.log(xform);
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...headers,
    },
  };

  let returnValue;

  await axios
    .put(baseURL + url, body, config)
    .then((result) => {
      returnValue = { result: result, error: null };
    })
    .catch((err) => {
      returnValue = { result: null, error: err };
    });
  return returnValue;
};