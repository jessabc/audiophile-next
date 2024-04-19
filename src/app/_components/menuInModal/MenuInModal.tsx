import CategoryInMenuModal from "./CategoryInMenuModal";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MenuInModal({ setOpen }: Props) {
  return (
    <section
      className={` gap-5  pt-14 flex flex-col md:grid md:grid-cols-3 md:gap-2`}
    >
      <CategoryInMenuModal
        image="/assets/shared/desktop/image-category-thumbnail-headphones.png"
        link="headphones"
        setOpen={setOpen}
      />

      <CategoryInMenuModal
        image="/assets/shared/desktop/image-category-thumbnail-speakers.png"
        link="speakers"
        setOpen={setOpen}
      />

      <CategoryInMenuModal
        image="/assets/shared/desktop/image-category-thumbnail-earphones.png"
        link="earphones"
        setOpen={setOpen}
      />
    </section>
  );
}
