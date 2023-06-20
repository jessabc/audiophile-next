"use client"
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image'
import {useSelector, useDispatch} from 'react-redux'
import CartProduct from './components/CartProduct';
import { removalAllFromCart } from '@/app/redux/features/cart/cartSlice';
import { useRouter } from 'next/navigation';

export default function Modal2 () {
const dispatch = useDispatch()
const router = useRouter()
  const cart = useSelector(state => state.cart.value)
 const cartElements = cart.map(product => <CartProduct key={product.id} product={product}/>)
 const total= cart.reduce((acc, curr) => {
    return acc = curr.quantity * curr.price
 },0)

 function checkout() {
  router.push('/checkout')
 }

    return (
        <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="">
          <Image
              className=""
              src="/assets/shared/desktop/icon-cart.svg"
              alt="hamburger icon"
              width={23}
              height={20}
              
            /> 
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
              cart {cart.length}
            </Dialog.Title>

            <Dialog.Close asChild>
            <div>
              <button onClick={()=> dispatch(removalAllFromCart())}>removal all</button>
              </div>
              </Dialog.Close>

              
            {/* <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
              Make changes to your profile here. Click save when you're done.
            </Dialog.Description> */}
    
    {cartElements}
    
    <div>
                <p>total</p>
                <p>{total}</p>
              </div>

             
          
          
              <Dialog.Close asChild>
                <button onClick={checkout}>checkout</button>
            </Dialog.Close> 
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    )
 
        }

