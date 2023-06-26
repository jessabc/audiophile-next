// import { FadeInLeftSection } from "../../animation/FadeInLeftSection "
// import { FadeInRightSection } from "../../animation/FadeInRightSection"
// import aboutMob from '../../assets/shared/mobile/image-best-gear.jpg'
// import aboutTablet from '../../assets/shared/tablet/image-best-gear.jpg'
// import aboutDesktop from '../../assets/shared/desktop/image-best-gear.jpg'

import { FadeInLeftSection } from '@/app/_animations/FadeInLeftSection'
import { FadeInRightSection } from '@/app/_animations/FadeInRightSection'
import Image from 'next/image'

export default function About() {

    return (
      <>
        <section className={`mx-8 flex flex-col gap-2 justify-center items-center mb-20 md:mx-12 md:gap-8 lg:flex-row lg:mx-32`} >
         
            <div className="lg:order-2 lg:w-1/2">
             <FadeInRightSection>  
             <Image
                src='/assets/shared/mobile/image-best-gear.jpg'
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto rounded-lg md:hidden lg:hidden"
                alt="man wearing headphones"
                />
                <Image
                src='/assets/shared/tablet/image-best-gear.jpg' 
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto rounded-lg hidden md:block lg:hidden"
                alt="man wearing headphones"
                />
                <Image
                src='/assets/shared/desktop/image-best-gear.jpg' 
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto rounded-lg hidden md:hidden lg:block"
                alt="man wearing headphones"
                />
                {/* <img src='/assets/shared/mobile/image-best-gear.jpg' alt="man wearing headphones" className='rounded-lg md:hidden lg:hidden'/> 
                <img src='/assets/shared/tablet/image-best-gear.jpg' alt="man wearing headphones" className='rounded-lg hidden md:block lg:hidden'/>
                <img src='/assets/shared/desktop/image-best-gear.jpg' alt="man wearing headphones" className='rounded-lg hidden md:hidden lg:block'/>  */}
              </FadeInRightSection>    
            </div>

            <div className="flex flex-col gap-8 lg:w-1/2 lg:order-1">
              <FadeInLeftSection>
                <h3 className='font-bold text-2xl leading-9 text-center tracking-wider uppercase text-black px-2 md:text-4xl md:px-20 lg:p-0 lg:text-left'>Bringing you the <span className='text-orange'>best</span> audio gear</h3>
                <p className='leading-6 text-center text-black opacity-50 md:px-20 lg:p-0 lg:text-left'>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
              </FadeInLeftSection>
            </div>
          
        </section>
      
      </>
    )
}