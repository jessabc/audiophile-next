import * as React from 'react';
import * as Toast from '@radix-ui/react-toast';

const ItemAddedModal = ({addToCart, productName}) => {
  const [open, setOpen] = React.useState(false);
 



  return (
    <Toast.Provider swipeDirection="right">
      <button
        className='w-1/2 font-bold text-sm leading-5 tracking-wide uppercase text-white bg-orange h-12 hover:bg-lightOrange' 
        onClick={() => {
           addToCart(); 
          setOpen(false);
          setTimeout(() => {
            
            setOpen(true);
            
          }, 100);
        }}
      >
        Add to cart
      </button>

      <Toast.Root duration={1000}
        className="bg-white rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
        open={open}
        onOpenChange={setOpen}
      >
        {/* <Toast.Title className="[grid-area:_title] mb-[5px] font-medium text-slate12 text-[15px]">
          {productName}
        </Toast.Title> */}
        <Toast.Description asChild>

        <div className='flex '>
                    <div className='w-10 mr-5'>
                       <img src='/assets/checkout/icon-order-confirmation.svg'/>

                    </div>
                    <div className=''>
                      <p className='font-semibold'>{productName}</p>
                      <p className=''> added to cart</p>
                    </div>

                </div>
         
        </Toast.Description>
        {/* <Toast.Action className="[grid-area:_action]" asChild altText="Goto schedule to undo">
          <button className="inline-flex items-center justify-center rounded font-medium text-xs px-[10px] leading-[25px] h-[25px] bg-green2 text-green11 shadow-[inset_0_0_0_1px] shadow-green7 hover:shadow-[inset_0_0_0_1px] hover:shadow-green8 focus:shadow-[0_0_0_2px] focus:shadow-green8">
            Undo
          </button>
        </Toast.Action> */}
      </Toast.Root>
      <Toast.Viewport className="[--viewport-padding:_25px] fixed mx-auto left-0 right-0 top-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw]  list-none z-[2147483647] outline-none" />
    </Toast.Provider>
  );
};



export default ItemAddedModal;