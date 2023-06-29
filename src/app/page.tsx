"use client"
import HeroProduct from './_components/home/HeroProduct'
import Menu from './_components/menu/Menu'
import FeaturedProducts from './_components/home/featured products/FeaturedProducts'
import { useEffect } from 'react'
import axios from 'axios'
import { useAppDispatch } from './_redux/hooks'
import { setAllProducts } from './_redux/features/products/productsSlice'


export default function Home() {

  const dispatch = useAppDispatch()

  useEffect(() => {
    async function getProductData() {
      try{
        const response = await axios.get('./data.json')
        // console.log(response.data)
        dispatch(setAllProducts(response.data))
      }catch(err) {
       alert(err)
      }
    }
    
    getProductData()
       
  },[])

  return (
    <main className="">
      <HeroProduct/>
      <Menu/>
      <FeaturedProducts/>
    </main>
  )
}
