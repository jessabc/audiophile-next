import Image from 'next/image'
import { useRouter } from "next/navigation"
import { checkEnviroment } from '../../_helpers/checkEnviroment'
import axios from 'axios'
import { IProduct, Other } from '../../interfaces'


async function getProductData() {
    const response = await axios.get(checkEnviroment().concat('/api/products'))
    return response.data
}

interface Props {
    product: Other
}

export default function OtherProductYouMayLike({product}: Props) {

    const router = useRouter()

    const {image, name, slug} = product

    async function seeProduct() {
        const products = await getProductData()
 
        const thisProduct = products.find((item: IProduct) => item.slug === product.slug)

        router.push(`/${thisProduct.category}/${thisProduct.slug}`)
    }
   
   
    return (
        <div className='flex flex-col gap-5 justify-center items-center mb-12'>

            <Image
                src={`/${image.mobile}`}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto md:hidden lg:hidden rounded-lg "
                alt={`${name} image`} 
            />
            <Image
                src={`/${image.tablet}`}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto hidden md:block lg:hidden rounded-lg"
                alt={`${name} image`} 
            />
            <Image
                src={`/${image.desktop}`}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto hidden md:hidden lg:block rounded-lg"
                alt={`${name} image`} 
            />

            <p className='font-bold text-2xl text-center tracking-wide uppercase text-black'>{name}</p>

            <div>
                <button  
                    className='font-bold text-sm leading-5 tracking-wide uppercase text-white bg-orange w-40 h-12 hover:bg-lightOrange'  
                    onClick={seeProduct}
                    >see product
                </button>  
            </div>
        </div>
    )
}