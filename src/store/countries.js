import { makeAutoObservable } from 'mobx';
import getCountries from './api';
import { INTERNATIONAL_CURRENCY_SYSTEM } from '../constants';
import { getInternationalCurrencyString } from '../helper';

const countries = makeAutoObservable({
  countries: [],
  showLoader: true,
  isError: false,
  countryNameFilter: '',
  populationFilter: '',

  fetchCountries() {
    this.showLoader = true;
    this.isError = false;
    getCountries().then((data) => {
      this.countries = data;
    }).catch(() => {
      this.isError = true;
    }).finally(() => {
      this.showLoader = false;
    })
  },

  get tableBodyList() {
    let filteredList = [];
    if (this.countryNameFilter || this.populationFilter) {
      filteredList = this.countries.filter((item) => {
        if (this.countryNameFilter && this.populationFilter) {
          return item.name === this.countryNameFilter || item.population < INTERNATIONAL_CURRENCY_SYSTEM[this.populationFilter];
        } else if (this.countryNameFilter) {
          return item.name === this.countryNameFilter;
        } else if (this.populationFilter) {
          return item.population < INTERNATIONAL_CURRENCY_SYSTEM[this.populationFilter];
        }
      })
    } else {
      filteredList = this.countries;
    }

    const mappedList = filteredList.map((item) => ({
      col1: item.name,
      col2: item.abbreviation,
      col3: item.capital,
      col4: item.phone,
      col5: getInternationalCurrencyString(item.population),
      col6: item.media.flag,
      col7: item.media.emblem,
    }));

    return mappedList;
  },

  setCountryNameFilter(value) {
    this.countryNameFilter = value;
  },

  setPopulationFilter(value) {
    this.populationFilter = value;

  },

  clearFilters() {
    this.populationFilter = '';
    this.countryNameFilter = '';
  },
});

export default countries;
