"use client"
import {useSelector, useDispatch} from 'react-redux'
import SummaryCartItem from './SummaryCartItem'
import { useGetTotal } from '@/app/_hooks/useGetTotal'

export default function Summary() {

    const cart = useSelector(state => state.cart.value)


    const SummaryCartItemElements = cart.map((item) => <SummaryCartItem key={item.id} item={item}/>)

    const total = useGetTotal()

    const shipping = 50

    const vat = parseInt((.2 * total).toFixed(0)) 

    const grandTotal = total + shipping

   
    return (
        <div>
            <p className='font-bold text-md leading-6 tracking-wider uppercase text-black mb-3'>summary</p>
            
            {SummaryCartItemElements}
           
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                   <div className='flex justify-between'>
                        <p className='font-medium leading-6 text-black opacity-50 uppercase'>total</p>
                        <p className='font-bold text-lg leading-6  uppercase text-black'>${(new Intl.NumberFormat().format(total))}</p>
                    </div>

                    <div className='flex justify-between'>
                        <p className='font-medium leading-6 text-black opacity-50 uppercase'>shipping</p>
                        <p className='font-bold text-lg leading-6  uppercase text-black'>${shipping}</p>
                    </div>

                    <div className='flex justify-between'>
                        <p className='font-medium leading-6 text-black opacity-50 uppercase'>vat(inlcluded)</p>
                        <p className='font-bold text-lg leading-6  uppercase text-black'>${(new Intl.NumberFormat().format(vat))}</p>
                    </div> 
                </div>
                
                <div className='flex justify-between'>
                    <p className='font-medium leading-6 text-black opacity-50 uppercase'>grand total</p>
                    <p className='font-bold text-lg leading-6  uppercase text-orange'>${(new Intl.NumberFormat().format(grandTotal))}</p>
                </div> 
            </div>
            
        </div>
    )
}