// import { useNavigate } from "react-router-dom"
// import { RecommendedProduct } from "../../interfaces"
// import {useContext} from 'react'
// import {ProductContext} from '../../ProductContext'


// interface OtherProductYouMayLikeProps {
//     product: RecommendedProduct,
// }
import Image from 'next/image'

import { useRouter } from "next/navigation"
import {useSelector} from 'react-redux'
import { checkEnviroment } from '../_helpers/checkEnviroment'
import axios from 'axios'

async function getProductData() {
    const response = await axios.get(checkEnviroment().concat('/api/products'))
    return response.data
  }

export default async function OtherProductYouMayLike({product}) {
    
    // const {state} = useContext(ProductContext)

    const router = useRouter()

    const {image, name, slug} = product

    // find catergory
    // const products = useSelector(state => state.products.value)
    const products = await getProductData()
 
    const thisProduct = products.find(item => item.slug === product.slug)

    
   
    // const navigate = useNavigate()

    // const item = state.data.find(item => item.slug === slug)

    // const routeChange = () => { 
    //     let path = `/${item?.category}/${slug}`; 
    //     navigate(path, {state: item})
    //     window.scrollTo(0, 0)
    // }

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

            {/* <img src={`.${image.mobile}`} alt={`${name} image`}  className="md:hidden lg:hidden rounded-lg"/>
            <img src={`.${image.tablet}`} alt={`${name} image`}  className="hidden md:block lg:hidden rounded-lg"/>
            <img src={`.${image.desktop}`} alt={`${name} image`}  className="hidden md:hidden lg:block rounded-lg"/> */}
            
            <p className='font-bold text-2xl text-center tracking-wide uppercase text-black'>{name}</p>

            <div>
                <button  
                    className='font-bold text-sm leading-5 tracking-wide uppercase text-white bg-orange w-40 h-12 hover:bg-lightOrange'  
                    onClick={()=> router.push(`/${thisProduct.category}/${thisProduct.slug}`)}
                    
                    // onClick={()=> router.push(`/headphones/xx59-headphones`)}
                    
                    
                    >see product
                </button>  
            </div>
        </div>
    )
}