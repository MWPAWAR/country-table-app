import axios from 'axios';

const COUNTRIES_GET_URL = 'https://api.sampleapis.com/countries/countries';

export default () => {
  return new Promise((resolve, reject) => {
    axios.get(COUNTRIES_GET_URL)
      .then((response) => resolve(response.data))
      .catch(() => reject('ERROR'))
  })
};

