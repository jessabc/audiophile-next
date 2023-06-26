// import Category from './Category'
// import categoryHeadphones from '/src/assets/shared/desktop/image-category-thumbnail-headphones.png'
// import categorySpeakers from '/src/assets/shared/desktop/image-category-thumbnail-speakers.png'
// import categoryEarphones from '/src/assets/shared/desktop/image-category-thumbnail-earphones.png'
// import { FadeInBottomSection } from "../../animation/FadeInBottomSection"

import { FadeInBottomSection } from "@/app/_animations/FadeInBottomSection";
import Category from "./Category";


// interface MenuProps {
//     isMenuModalVisible?: boolean,
//     setIsMenuModalVisible?: React.Dispatch<React.SetStateAction<boolean>> | any
// }

// {isMenuModalVisible, setIsMenuModalVisible}: MenuProps
export default function Menu() {

    return (
        <FadeInBottomSection>
            <section className={`md:mx-12 md:grid md:grid-cols-3 gap-2  lg:mx-32 `}  > 
 
                <Category 
                    image='/assets/shared/desktop/image-category-thumbnail-headphones.png' 
                    link='headphones'
                    
                />

                <Category 
                    image='/assets/shared/desktop/image-category-thumbnail-speakers.png'
                    link='speakers'
                    
                />

                <Category 
                    image='/assets/shared/desktop/image-category-thumbnail-earphones.png' 
                    link='earphones'
                    
                />

            </section>
            </FadeInBottomSection>
    )
}