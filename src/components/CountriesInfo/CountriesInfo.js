import { getString } from '../../i18n/en';
import CountryFilters from './CountryFilters';
import CountryTable from './CountryTable/CountryTable';

const CountriesInfo = () => {
  return (
    <>
      <h1>{getString('heading')}</h1>
      <CountryFilters />
      <CountryTable />
    </>
  )
};

export default CountriesInfo;
