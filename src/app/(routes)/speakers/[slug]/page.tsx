import DisplayProduct from '@/app/_components/DisplayProduct'
import Menu from '@/app/_components/menu/Menu'
import axios from 'axios'
import { checkEnviroment } from '@/app/_helpers/checkEnviroment'


export async function generateMetadata({params}: {params: { slug: string }}) {
  return {
    title: params.slug,
  }
}


async function getProductData({params}: {params: { slug: string }}) {
  const response = await axios.get(checkEnviroment().concat(`/api/products/speakers/${params.slug}`))
  return response.data
}


export default async function Speaker({params}: {params: { slug: string }}) {
 
  const thisProduct = await getProductData({params})
  
  return (
    <main className="">

      <DisplayProduct product={thisProduct}/>   
      
      <Menu />
  
    </main>
  )
}
