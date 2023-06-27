import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image'
import MenuInModal from '@/app/_components/menuInModal/MenuInModal';


export default function MenuModal() {
  
  const [open, setOpen] = React.useState(false)

  
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
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[55%] left-[50%] max-h-[85vh] w-[90vw]   max-w-[450px] md:max-w-screen-lg translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none overflow-auto">
       
        <MenuInModal setOpen={setOpen}/>
       
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
  )
}
