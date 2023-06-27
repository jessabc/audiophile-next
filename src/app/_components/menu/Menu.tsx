import { FadeInBottomSection } from "@/app/_animations/FadeInBottomSection";
import Category from "./Category";


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