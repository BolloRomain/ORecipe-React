import axios from 'axios';

export const instanceAxios = axios.create({
  baseURL: 'http://localhost:3001',
});

export const requestLogin = async (email, password) => {
  try {
    const result = await instanceAxios.post(
      '/login',
      {
        email: email,
        password: password,
      },
    );
    return result;
  }
  catch (error) {
    return error;
  }
};
