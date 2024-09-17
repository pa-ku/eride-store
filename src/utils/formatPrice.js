export function formatPrice(price) {
  const result = price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
  return result
}
