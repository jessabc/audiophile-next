import Image from 'next/image'
import {useRouter } from 'next/navigation'

export default function HeroProduct() {

    
const router = useRouter()
  

   

    return (
         <div className=" fade-in relative mb-40 mb:36 md:mb-44 lg:mb-40">

            {/* <div className=''>
                <Image
                src='/assets/home/mobile/image-header.jpg'
                alt=''
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
                />
            </div> */}

            <div>
                {/* small screen / mobile */}
                {/* <img src={heroMob} 
                alt="headphones" className="w-full md:hidden lg:hidden"/> */}
                <Image
                src='/assets/home/mobile/image-header.jpg'
                alt='headphones'
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto md:hidden lg:hidden"
                />
                {/* med screen / tablet */}
                {/* <img src={heroTablet}  
                alt="headphones" className="w-full hidden md:block lg:hidden"/> */}
                <Image
                src='/assets/home/tablet/image-header.jpg'
                alt=''
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto hidden md:block lg:hidden"
                />
                {/* lg screen / desktop */}
                {/* <img src={heroDesktop}  
                alt="headphones" className="w-full hidden lg:block"/> */}
                <Image
                src='/assets/home/desktop/image-hero.jpg'
                alt=''
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto hidden lg:block"
                />
            </div>

            <div className="text-white absolute top-0 px-8  flex flex-col items-center justify-center h-full gap-4 md:px-32 md:gap-6 lg:items-start lg:w-1/2 ">
                <p className="text-sm leading-5 text-center tracking-widest uppercase text-white opacity-50">NEW PRODUCT</p>
                <p className='font-bold text-4xl leading-10 text-center tracking-wider uppercase md:text-6xl lg:text-5xl  lg:text-left'>XX99 MARK II HEADPHONES</p>
                <p className='font-semibold text-center text-white opacity-75 leading-loose my-3 lg:text-left'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <button 
                onClick={()=> router.push(`/headphones/xx99-mark-one-headphones`)}
                    className='font-bold text-sm leading-5 tracking-wide uppercase text-white bg-orange w-40 h-12 hover:bg-lightOrange' 
                    >
                    see product
                </button>
            </div>
          
        </div>
    )
}