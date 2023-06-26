// import { useNavigate } from "react-router-dom"
// import iconArrow from '../../assets/shared/desktop/icon-arrow-right.svg'


// interface CategoryProps {
//     image: string,
//     link: string,
//     isMenuModalVisible?: boolean,
//     setIsMenuModalVisible: React.Dispatch<React.SetStateAction<boolean>> | any
// }
import { useRouter } from "next/navigation"
import Image from 'next/image'

export default function CategoryInMenuModal({image, link, setOpen }) {

const router = useRouter()
    function handleClick() {
        router.push(`/${link}`)
        // window.scrollTo(0, 0)
        setOpen(false)
    }

    return (
       
        <div className={`flex flex-col justify-end items-center uppercase gap-5 bg-gray rounded-lg  h-56 relative pb-8 mx-8 my-20 md:mx-0 md:h-44 md:mb-28 lg:h-56 `} >

      
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