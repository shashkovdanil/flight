import { create } from 'apisauce';

// configure API
const api = create({
  baseURL: 'http://localhost:3000'
});

const API = {
  getFlights() {
    return api.get('/flights/');
  },

  addFlight() {
    return api.post('/flights/', {
      flight: '',
      from: '',
      to: '',
      aircraft: '',
      time: '',
      exp: '',
      status: ''
    });
  },

  filterByCity(query, dest) {
    if (!query) {
      return api.get('/flights/');
    }
    return api.get(`/flights/?${dest}=${query}`);
  },

  filterByStatus(status) {
    if (status === 'all') {
      return api.get('/flights/');
    }
    return api.get(`/flights/?status=${status}`);
  },

  updateFlight(id, flight) {
    return api.put(`/flights/${id}`, flight);
  },

  deleteFlight(id) {
    return api.delete(`/flights/${id}`);
  }
};

export default API;
