import { observer, inject } from "mobx-react";
import { getString } from "../../i18n/en";

const CountryFilters = inject('countries')(observer(({ countries }) => {
  const handleOnChangeCountryName = (evt) => {
    countries.setCountryNameFilter(evt.target.value.trim())
  };

  const handlePopulationSelect = (evt) => {
    countries.setPopulationFilter(evt.target.value);
  };

  const handleClearBtnClick = () => {
    countries.clearFilters();
  };

  const handleShowAllCountriesClick = () => {
    countries.fetchCountries();
  };

  return (
    <div className="countryFilters">
      <input type="text" placeholder={getString('countryNameFilter')} onChange={handleOnChangeCountryName} />
      <select name="population" onChange={handlePopulationSelect}>
        <option value="">{getString('populationFilter')}</option>
        <option value="< 1M">{'< 1M'}</option>
        <option value="< 5M">{'< 5M'}</option>
        <option value="< 10M">{'< 10M'}</option>
      </select>
      <button onClick={handleClearBtnClick}>{getString('clear')}</button>
      <button onClick={handleShowAllCountriesClick}>{getString('showAllCountries')}</button>
    </div>
  );
}));

export default CountryFilters;
