export const currencyFormatter = (value: number, locale = "pt-BR"): string => {
  const options = { style: "currency", currency: "BRL" };
  return value?.toLocaleString(locale, options) ?? "0,00";
};

export const getLastMonth = () => {
  const today = new Date();
  today.setMonth(today.getMonth() - 1);
  return today.toLocaleDateString("pt-BR", { month: "long" });
};
