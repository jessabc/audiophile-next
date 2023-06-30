import getProducts from './useGetProducts'


export default function useGetThisProduct({params}: {params: { slug: string }}) {
  const products = getProducts()
  const thisProduct = products?.find(item => item.slug === params.slug)
  return thisProduct
}
