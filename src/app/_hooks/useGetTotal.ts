import {useSelector, useDispatch} from 'react-redux'



export function useGetTotal() {

    const cart = useSelector(state => state.cart.value)

    function getTotal() {
        let total =  cart.reduce((acc, curr) => {
            return acc + (curr.quantity! * curr.price)
        }, 0)
        
       return total
    }

    return getTotal()
}