import { useAppSelector } from '@/app/_redux/hooks'

export function useNumItemsInCart() {
    const cart = useAppSelector(state => state.cart.value)

    return cart.reduce((acc, curr) => {
      return acc + curr.quantity
    }, 0)
 }