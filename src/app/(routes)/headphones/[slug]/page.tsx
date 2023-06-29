"use client"
import Menu from '@/app/_components/menu/Menu' 
import ProductDetail from '@/app/_components/product/ProductDetail'
import useGetProducts from '@/app/_hooks/useGetProducts'
import useGetThisProduct from '@/app/_hooks/useGetThisProduct'



export default  function Headphone({params}: {params: { slug: string }}) {
 
  const products =  useGetProducts()
  const thisProduct = useGetThisProduct({params})
  
  return (
    <main className="">

      {thisProduct && <ProductDetail product={thisProduct}/>}

      <Menu />
  
    </main>
  )
}
