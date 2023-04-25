import { inject, observer } from 'mobx-react';
import { useEffect } from 'react';
import { useTable } from 'react-table';
import THead from './THead';
import TBody from './TBody';
import { tableHeadList } from '../../../constants';

const CountryTable = inject('countries')(observer(({ countries }) => {
  const tableInstance = useTable({ columns: tableHeadList, data: countries.tableBodyList })
  const {
    getTableProps,
  } = tableInstance;

  useEffect(() => {
    countries.fetchCountries();
  }, [])
 
  if (countries.showLoader) return 'Loading ...';

  return (
    <table {...getTableProps()}>
      <THead tableInstance={tableInstance} />
      <TBody tableInstance={tableInstance} />
    </table>
  );
}));

export default CountryTable;
