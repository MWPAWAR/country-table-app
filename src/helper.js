export const getInternationalCurrencyString = (value) => {
  if (value === 0 || typeof value === 'undefined') return '';

  return (value / 1000000).toFixed(1) + 'M';
};
