import { getString } from "./i18n/en";

export const INTERNATIONAL_CURRENCY_SYSTEM = {
  '< 1M': 1000000,
  '< 5M': 5000000,
  '< 10M': 10000000
}

export const tableHeadList =
  [
    {
      Header: getString('countryNameThead'),
      accessor: 'col1',
    },
    {
      Header: getString('codeThead'),
      accessor: 'col2',
    },
    {
      Header: getString('capitalThead'),
      accessor: 'col3',
    },
    {
      Header: getString('phCodeThead'),
      accessor: 'col4',
    },
    {
      Header: getString('populationThead'),
      accessor: 'col5',
    },
    {
      Header: getString('flagThead'),
      isImg: true,
      accessor: 'col6',
    },
    {
      Header: getString('emblemThead'),
      isImg: true,
      accessor: 'col7',
    },
  ];