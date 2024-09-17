export function formatPrice(price) {
  price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
}
