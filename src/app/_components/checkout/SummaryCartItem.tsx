import CartItem from '@/app/_components/cart/CartItem'
import { ProductInCart } from '@/app/interfaces'

interface Props {
    item: ProductInCart
}

export default function SummaryCartItem({item}: Props) {

    return (

        <div className="grid grid-cols-5 gap-3 items-center mb-4">
            <CartItem product={item}/>
            <p className="col-start-5 text-right font-bold leading-6 text-black opacity-50">x
            {item?.quantity}</p>
        </div>
       
    )
}