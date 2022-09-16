import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { useStateContext } from '../context/ContextProvider'
import { cartData } from '../data/dummy'

import {Button} from '.'


const Cart = () => {
  const {currentColor} = useStateContext();
  return (
    <div className='fixed top-0 right-0 w-full bg-half-transparent nav-item'>
      <div className='float-right h-screen duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8'>
        <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">Shopping Cart</p>
        <Button icon={<MdOutlineCancel />} color="rgb(153, 171, 180)" bgHoverColor="light-gray" size="2xl" borderRadius="50%"/>
        </div>
        {cartData?.at((item, index) => (
          <div key={index}>
            <div>
              <div className="flex items-center gap-5 p-4 leading-8 border-b-1 border- dark:border-gray-600">
                <img src={item.image} alt="" className="w-24 rounded-lg h-80" />
                 <div>
                  <p className="font-semibold"> {item.name}</p>
                  <p className="text-sm font-semibold text-gray-600">{item.category}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <p className="text-lg font-semibold">{item.price}</p>
                  <div className="flex items-center border-r-0 rounded border-1 border-color">
                    <p className="p-2 text-red-600 border-r-1 dark:border-gray-600 border-color"><AiOutlineMinus /></p>
                    <p className="p-2 text-green-600 border-r-1 dark:border-gray-600 border-color"> 0</p>
                    <p className="p-2 text-green-600 border-r-1 dark:border-gray-600 border-color"><AiOutlinePlus /></p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        ))}
        <div className="mt-5">
          <Button color="white" bgColor={currentColor} text="Place Order" borderRadius="10px" width="full" />
        </div>
      </div>
    </div>
  )
}

export default Cart