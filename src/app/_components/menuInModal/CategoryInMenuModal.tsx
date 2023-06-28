import { useRouter } from "next/navigation"
import Image from 'next/image'
import iconArrow from '../../../../public/assets/shared/desktop/icon-arrow-right.svg'

interface Props {
    image: string,
    link: string,
    setOpen:  React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CategoryInMenuModal({image, link, setOpen }: Props) {

    const router = useRouter()

    function handleClick() {
        router.push(`/${link}`)
        setOpen(false)
    }

    return (  
        <div className={`flex flex-col justify-end items-center uppercase gap-5 bg-gray my-10 rounded-lg pb-8 h-44 relative  mx-14  md:px-20`} >

            <div className="absolute bottom-16 ">
                <Image
                src={image}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-44 object-contain	 "
                alt="category image" 
                /> 
            </div>
               
            <p className="font-bold leading-5 tracking-wider text-black">{link}</p>
            
            <button onClick={handleClick} className='flex justify-center items-center gap-3'>
                <p className="font-bold text-sm leading-5 tracking-wide text-black opacity-50 hover:text-orange">Shop</p>
                <div>
                    <Image
                    src={iconArrow}
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full"
                    alt='arrow icon' 
                    />  
                </div>
            </button> 
              
    </div>
       
    )
}