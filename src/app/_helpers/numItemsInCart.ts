import {useSelector, useDispatch} from 'react-redux'
export function numItemsInCart() {
    const cart = useSelector(state => state.cart.value)

    return cart.reduce((acc, curr) => {
      return acc + curr.quantity
    }, 0)
 }