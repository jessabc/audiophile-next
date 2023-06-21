import CartItem from "../modals/cart/components/CartItem";






export default function SummaryCartItem({item}) {

    return (

        <div className="grid grid-cols-5 gap-3 items-center mb-4">
        <CartItem product={item}/>
        <p className="col-start-5 text-right font-bold leading-6 text-black opacity-50">x
        {item.quantity}</p>
    </div>
        // <>
        //     <div className="grid grid-cols-5 gap-3 items-center mb-4">
        //         <p>{item.name}</p>
        //         <p>{item.price}</p>
        //         <p className="col-start-5 text-right font-bold leading-6 text-black opacity-50">x
        //         {item.quantity}</p>
        //     </div>
        // </>
    )
}