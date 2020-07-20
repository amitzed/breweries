import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.openbrewerydb.org/breweries?per_page=50'
});
