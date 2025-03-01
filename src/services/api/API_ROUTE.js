const production = false

export const API_ROUTE = production
  ? 'https://eride-api.vercel.app/api'
  : 'http://localhost:3000/api'
