import HeroProduct from './_components/home/HeroProduct'
import Menu from './_components/menu/Menu'
import FeaturedProducts from './_components/home/featured products/FeaturedProducts'


export default function Home() {
  return (
    <main className="">
      <HeroProduct/>
      <Menu/>
      <FeaturedProducts/>
    </main>
  )
}
