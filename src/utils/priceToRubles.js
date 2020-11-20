export const priceToRubles = price =>
  new Intl.NumberFormat("ru-Ru", {
    style: "currency",
    currency: "RUB",
  }).format(price)
