import Menu from '@/app/_components/menu/Menu' 
import axios from 'axios'
import { checkEnviroment } from '@/app/_helpers/checkEnviroment'
import ProductDetail from '@/app/_components/product/ProductDetail'


export async function generateMetadata({params}: {params: { slug: string }}) {
  return {
    title: params.slug,
  }
}


async function getProductData({params}: {params: { slug: string }}) {
  const response = await axios.get(checkEnviroment().concat(`/api/products/headphones/${params.slug}`))
  return response.data
}


export default async function Headphone({params}: {params: { slug: string }}) {
 
  const thisProduct = await getProductData({params})
  
  return (
    <main className="">

      <ProductDetail product={thisProduct}/>   

      <Menu />
  
    </main>
  )
}
