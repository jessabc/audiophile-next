// import { FadeInBottomSection } from '../../animation/FadeInBottomSection'
// import { useNavigate } from "react-router-dom"
// import {useContext} from 'react'
// import {ProductContext} from '../../ProductContext'
// import { IProduct } from '../../interfaces'
"use client"
import { useRouter } from "next/navigation"
import Image from 'next/image'
import { FadeInBottomSection } from "@/app/_animations/FadeInBottomSection"

export default function FeaturedProduct3() {

    // const {state} = useContext(ProductContext)

    // const featuredProduct3 = state.data?.find(item => item.name === "YX1 Wireless Earphones")

    // const navigate = useNavigate()

    // const routeChange = (featuredProduct: IProduct | undefined) => { 
    //     let path = `/${featuredProduct?.category}/${featuredProduct?.slug}`; 
    //     navigate(path, {state: featuredProduct})
    //     window.scrollTo(0, 0)
    // }
    const router = useRouter()


    return (
        <>
          <FadeInBottomSection>
            <div className={`mx-8 md:grid md:grid-cols-2 md:gap-2 md:mx-12 lg:mx-32`} >

                <div className='md:w-fit '>
                <Image
                src={'/assets/home/mobile/image-earphones-yx1.jpg'}
                width="0"
                height="0"
                sizes="100vw"
                alt="YX1 Wireless Earphones"   className='w-full  rounded-lg md:hidden lg:hidden'
                />
                <Image
                src={'/assets/home/tablet/image-earphones-yx1.jpg'}
                width="0"
                height="0"
                sizes="100vw"
                alt="YX1 Wireless Earphones"   className='w-full  rounded-lg hidden md:block lg:hidden'
                />
                <Image
                src={'/assets/home/desktop/image-earphones-yx1.jpg'}
                width="0"
                height="0"
                sizes="100vw"
                alt="YX1 Wireless Earphones"   className='w-full  rounded-lg hidden lg:block '
                />
                    {/* <img src={'assets/home/mobile/image-earphones-yx1.jpg'} alt="YX1 Wireless Earphones"  className='rounded-lg md:hidden lg:hidden'/>
                    <img src={'assets/home/tablet/image-earphones-yx1.jpg'} alt="YX1 Wireless Earphones" className='rounded-lg hidden md:block lg:hidden'/>
                    <img src={'assets/home/desktop/image-earphones-yx1.jpg'} alt="YX1 Wireless Earphones" className='rounded-lg hidden lg:block '/>  */}
                </div>

                <div className="bg-gray rounded-lg mt-5 mb-20 h-48 flex flex-col gap-5 justify-center items-start pl-5 
                md:m-0 md:p-0 md:h-full md:w-full md:px-5
                ">
                    <p className='font-bold text-2xl leading-9 tracking-wider uppercase text-black md:text-3xl '>YX1 EARPHONES</p> 
                    <button 
                        className='font-bold text-sm leading-5 tracking-wide uppercase text-black border  w-40 h-12 cursor-pointer hover:bg-black hover:text-white  lg:bg-black lg:text-white hover:lg:bg-white hover:lg:text-black' 
                        onClick={() => router.push('/earphones/yx1-earphones')}>
                        see product
                    </button>
                </div>
            </div>
        </FadeInBottomSection>

    </>
    )
} 