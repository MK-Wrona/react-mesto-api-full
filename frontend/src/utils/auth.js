export const BASE_URL = 'http://backend.daru.students.nomoredomains.rocks/api';

const checkRequestResult = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error ${res.status}`);
}

export const register = (email, password) => {
  return fetch(`${BASE_URL}/sign-up`, {
    method: 'POST',
    credentials:"include",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password})
  })
  .then(checkRequestResult)
}; 

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/sign-in`, {
    method: 'POST',
    credentials:"include",
    headers: { 'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password })
  })
  .then(res => checkRequestResult(res))
  .then((data) => {
    if (data.token) {
      localStorage.setItem('jwt', data.token);
      return data.token;
    }
  })
}

export const getContent = (token) => {return fetch(`${BASE_URL}/users/me`, {
  method: 'GET',
  credentials:"include",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  },
})
  .then(checkRequestResult)
  .then((data) => data)
}