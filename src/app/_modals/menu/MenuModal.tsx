import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image'
import Menu from '@/app/_components/menu/Menu';
import Category from '@/app/_components/menu/Category';
import MenuInModal from '@/app/_components/menuInModal/MenuInModal';
import { useRouter } from "next/navigation"


const MenuModal
 = () => {
    // const router = useRouter()
    // function handleClick() {
    //     router.push(`/${link}`)
    //     // window.scrollTo(0, 0)
    // }
    const [open, setOpen] = React.useState(false);

  
 return (
 
  <Dialog.Root open={open} onOpenChange={setOpen}>

    <Dialog.Trigger >
    <Image
          className="w-auto h-auto"
          src="/assets/shared/tablet/icon-hamburger.svg"
          alt="hamburger icon"
          width={0}
          height={0}
          
        /> 
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[55%] sm:top-[40%] left-[50%] max-h-[85vh] w-[90vw] sm:max-w-screen-lg  max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none overflow-auto">
       
         <MenuInModal setOpen={setOpen}/>
       
        <Dialog.Close>
      
       
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
 }
export default MenuModal
;