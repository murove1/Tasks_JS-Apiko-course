import axios from 'axios';
import config from '../config';

class Api {
  constructor(baseUrl) {
    this._baseUrl = `${baseUrl}/api/v1`;
  }

  setToken(token) { // eslint-disable-line
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  mockCall() { // eslint-disable-line
    return new Promise(res => setTimeout(res, 1000));
  }

  signUp(username, password, email) {
    return axios.post(`${this._baseUrl}/auth/sign-up`, {
      email,
      password,
      profile: {
        fullName: username,
      },
    });
  }

  getQuestions() {
    return axios.get(`${this._baseUrl}/questions`);
  }
}

const api = new Api(config.api_url);

export default api;
