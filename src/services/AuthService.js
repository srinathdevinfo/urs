import axios from 'axios';
import AuthHeader from './AuthHeader';

const TOKEN_API_URL = 'https://mditest.elifeamerica.com/oauth/token';
const API_URL = 'https://mditest.elifeamerica.com/api/v1/';

const register = (first_name, last_name, email, password, confirm_password, mobile_number, dob) => axios.post(`${API_URL}register`, {
  first_name,
  last_name,
  email,
  password,
  confirm_password,
  mobile_number,
  dob,
});

const login = (username, password, client_id = 4, client_secret = 'sfQfhp6tDeGvEp7ZhVwk0MjbpaP55tJ1oJAKuZAE') => axios
  .post(`${TOKEN_API_URL}`, {
    username,
    password,
    client_id,
    client_secret,
    grant_type: 'password',
  })
  .then((response) => {
    if (response.data.access_token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
  });

const logout = () => {
  localStorage.removeItem('user');
};

const user = () => axios.get(`${API_URL}profile`, { headers: AuthHeader() }).then((response) => response.data);

export default {
  register,
  login,
  logout,
  user,
};
