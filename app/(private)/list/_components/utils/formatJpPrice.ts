export const formatJpPrice = (price: number): string => {
  if (price === null) return ''
  if (price < 1000) return String(price)
  return price.toLocaleString()
}
