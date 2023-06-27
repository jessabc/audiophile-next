import Menu from '@/app/_components/menu/Menu'
import axios from 'axios'
import { useCheckEnviroment } from '@/app/_hooks/useCheckEnviroment'
import ProductDetail from '@/app/_components/product/ProductDetail'


export async function generateMetadata({params}: {params: { slug: string }}) {
  return {
    title: params.slug,
  }
}


async function getProductData({params}: {params: { slug: string }}) {
  const response = await axios.get(useCheckEnviroment().concat(`/api/products/speakers/${params.slug}`))
  return response.data
}


export default async function Speaker({params}: {params: { slug: string }}) {
 
  const thisProduct = await getProductData({params})
  
  return (
    <main className="">

      <ProductDetail product={thisProduct}/>   
      
      <Menu />
  
    </main>
  )
}
