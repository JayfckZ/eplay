import { Game } from '../pages/Home'

export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

export const getTotalPrices = (items: Game[]) => {
  return items.reduce((acc, curr) => {
    if (curr.prices.current) {
      return (acc += curr.prices.current)
    }
    return 0
  }, 0)
}
