export const currencyFormatter = (value: number, locale = "pt-BR"): string => {
  const options = { style: "currency", currency: "BRL" };
  return value?.toLocaleString(locale, options) ?? "0,00";
};
