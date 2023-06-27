import { ProductInCart } from '@/app/interfaces';
import Image from 'next/image';

interface Props {
    product: ProductInCart
  }
  
export default function CartItem({product}: Props) {

    return (
        <>
            <div>
                <Image
                    src={`/${product?.image?.mobile}`} 
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-auto rounded-lg"
                    alt={product?.name}
                />
                
            </div>
            <div className="col-span-2">
                <p className="font-bold leading-6 text-black">{product?.name}</p>
                <p className="font-bold text-sm leading-6 text-black opacity-50">$ {(new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(product?.price))}</p> 
            </div>
        </>
    )
}