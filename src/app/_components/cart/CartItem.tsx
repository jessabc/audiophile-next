// import { IProduct } from "../../interfaces"


// interface CartItemProps {
//     item: IProduct,
// }


export default function CartItem({product}) {

    return (
        <>
            <div>
                <img src={`../${product?.image?.mobile}`} alt={product.name} className="rounded-lg"/>
            </div>
            <div className="col-span-2">
                <p className="font-bold leading-6 text-black">{product.name}</p>
                <p className="font-bold text-sm leading-6 text-black opacity-50">$ {(new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(product.price))}</p> 
            </div>
        </>
    )
}