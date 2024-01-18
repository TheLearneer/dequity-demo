const options = {
  usd: { style: 'currency', currency: 'USD' },
  percent: {
    style: 'percent',
  },
};
export const getFormattedValue = (
  type: 'usd' | 'percent',
  value: number | string,
  locale: string = 'en',
  fractionDigits = 0,
) => {
  return value.toLocaleString(locale, {
    ...options[type],
    maximumFractionDigits: fractionDigits,
  });
};
