import Category from "./Category";

export default function Menu() {
  return (
    <section
      className={`flex flex-col gap-4  my-10 md:grid md:grid-cols-3 md:mx-12 lg:mx-32 md:mt-32 lg:mt-40 `}
    >
      <Category
        image="/assets/shared/desktop/image-category-thumbnail-headphones.png"
        link="headphones"
      />

      <Category
        image="/assets/shared/desktop/image-category-thumbnail-speakers.png"
        link="speakers"
      />

      <Category
        image="/assets/shared/desktop/image-category-thumbnail-earphones.png"
        link="earphones"
      />
    </section>
  );
}
