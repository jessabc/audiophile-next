"use client"
import React, {useState} from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import SummaryCartItem from '@/app/_components/checkout/SummaryCartItem';
// import {useSelector, useDispatch} from 'react-redux'
import { useAppSelector, useAppDispatch } from '@/app/_redux/hooks'

import { useGetTotal } from '@/app/_hooks/useGetTotal';
import {useRouter} from 'next/navigation'
import IconOrderConfirmation from '../../../../public/assets/checkout/icon-order-confirmation.svg'
import Image from 'next/image';
import { removalAllFromCart } from '@/app/_redux/features/cart/cartSlice';
import { ProductInCart } from '@/app/interfaces';

interface Props {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ConfirmationModal ({open, setOpen}: Props) {

  const [showAllCartItems, setShowAllCartItems] = useState(false)

  const cart = useAppSelector(state => state.cart.value)

  const dispatch = useAppDispatch()

  const router = useRouter()

  const firstCartItemElement = <SummaryCartItem item={cart[0]}/>

  const allCartItemElements = cart.map((item: ProductInCart) => <SummaryCartItem key={item.id} item={item}/>)

  const total = useGetTotal()

  function backHome() {
    router.push('/')
    dispatch(removalAllFromCart())
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
  
    <Dialog.Portal>
    <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
    <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">

      {/* MODAL CONTENT */}
      <div className='flex flex-col gap-3 justify-start items-start'>         
        <Image
          src={IconOrderConfirmation}
          width="0"
          height="0"
          sizes="100vw"
          className="w-14 h-auto"
          alt="confirmation check"
        />
        <p className='font-bold text-2xl leading-7 track uppercase text-black'>THANK YOU <br/>
        FOR YOUR ORDER</p>
        <p className='font-medium leading-6 text-black opacity-50'>You will receive an email confirmation shortly.</p>

        <div className="flex flex-col md:flex-row">
          <div className='bg-gray p-4  pr-10 rounded-tl-lg rounded-tr-lg md:rounded-bl-lg md:w-3/5'>
            <div className={`${showAllCartItems ? 'hidden' : 'block'}`}>
              {firstCartItemElement}
                {cart.length > 1 && <button onClick={() => setShowAllCartItems(true)} className='font-bold text-xs leading-4 tracking-tight text-black opacity-50 pl-9'>and {cart.length - 1} other item(s)</button>}  
            </div>
            <div className={`${showAllCartItems ? 'block' : 'hidden'}`}>
              {allCartItemElements}
              <button onClick={() => setShowAllCartItems(false)} className='font-bold text-xs  leading-4 tracking-tight text-black opacity-50 pl-9'>View less</button> 
            </div>
          </div>
            
          <div className={`flex flex-col rounded-bl-lg rounded-br-lg md:rounded-tr-lg md:rounded-bl-none gap-2 bg-black p-4 md:w-2/5 ${showAllCartItems ? 'md:justify-end ' : ' md:justify-center'}`}>
            <p className='font-medium leading-6 text-white opacity-50 uppercase'>grand total</p>
            <p className={`font-bold text-lg leading-6 uppercase text-white ${showAllCartItems ? 'md:pb-5 ' : ''}`}>${(new Intl.NumberFormat().format(total))}</p>
          </div>
        </div >
      </div>

    <Dialog.Close asChild>
      <div className="mt-4">
        <button
          className='font-bold text-sm leading-5 tracking-wide uppercase text-white bg-orange w-full h-12 hover:bg-lightOrange'
          onClick={backHome}
        >
          back to home
        </button>
      </div>
    </Dialog.Close>

    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>
)
}


