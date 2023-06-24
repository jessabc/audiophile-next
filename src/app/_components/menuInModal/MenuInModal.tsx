// import Category from './Category'
// import categoryHeadphones from '/src/assets/shared/desktop/image-category-thumbnail-headphones.png'
// import categorySpeakers from '/src/assets/shared/desktop/image-category-thumbnail-speakers.png'
// import categoryEarphones from '/src/assets/shared/desktop/image-category-thumbnail-earphones.png'
// import { FadeInBottomSection } from "../../animation/FadeInBottomSection"

import CategoryInMenuModal from './CategoryInMenuModal'


// interface MenuProps {
//     isMenuModalVisible?: boolean,
//     setIsMenuModalVisible?: React.Dispatch<React.SetStateAction<boolean>> | any
// }

// {isMenuModalVisible, setIsMenuModalVisible}: MenuProps
export default function MenuInModal
({setOpen}) {

    return (
        <section className={`md:mx-12 md:grid md:grid-cols-3 gap-2  lg:mx-32 mt-10 `}  > 
 
                <CategoryInMenuModal 
                    image='/assets/shared/desktop/image-category-thumbnail-headphones.png' 
                    link='headphones'
                    setOpen={setOpen}
                />

                <CategoryInMenuModal 
                    image='/assets/shared/desktop/image-category-thumbnail-speakers.png'
                    link='speakers'
                    setOpen={setOpen}
                />

                <CategoryInMenuModal 
                    image='/assets/shared/desktop/image-category-thumbnail-earphones.png' 
                    link='earphones'
                    setOpen={setOpen}
                />

            </section>

       
    )
}