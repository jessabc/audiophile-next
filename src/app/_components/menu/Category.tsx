"use client"
import { useRouter } from "next/navigation"

interface Props {
    image: string,
    link: string
}

export default function Category({image, link}: Props ){

    const router = useRouter()

    function handleClick() {
        router.push(`/${link}`)
    }

    return (
        <div className={`flex flex-col justify-end items-center uppercase gap-5 bg-gray rounded-lg my-5 h-64 relative pb-8 mx-8 mb-32 md:mx-0 md:h-44 md:mb-28 lg:h-56 `} >

            <img src={image} alt="category image" className={`absolute bottom-16 max-h-64 `}/>

            <p className="font-bold leading-5 tracking-wider text-black">{link}</p>
            
            <button onClick={handleClick} className='flex justify-center items-center gap-3'>
                <p className="font-bold text-sm leading-5 tracking-wide text-black opacity-50 hover:text-orange">Shop</p>
                <div>
                    <img src='/assets/shared/desktop/icon-arrow-right.svg' alt='arrow icon' />  
                </div>
            </button> 
                  
        </div>
       
    )
}