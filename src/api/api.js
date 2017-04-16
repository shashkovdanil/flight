import { create } from 'apisauce';

const api = create({
  baseURL: 'http://localhost:3000'
});

const API = {
  getFlights() {
    return api.get('/flights/');
  }
};

export default API;
