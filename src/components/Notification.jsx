import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import {Button} from '.'
import { chatData } from '../data/dummy'
import { useStateContext } from '../context/ContextProvider'



const Notification = () => {
  const {currentColor} = useStateContext();
  return (
    <div className="nav-item absolute right-2 md:right-6 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <p className='text-lg font-semibold dark:text-gray-200'>Notifications</p>
          <button type="button" className="p-1 px-2 text-xs text-white rounded bg-[#f38027]"> 5 New</button>
        </div>
        <Button icon={<MdOutlineCancel />} color={currentColor} bgColor={currentColor} bgHoverColor="light-gray" size="2xl" borderRadius="50%" />
      </div>
      <div className="mt-5">
        {chatData?.map((item, index) => (
          <div key={index} className="flex items-center gap-5 p-3 leading-8 border-b-1 border-color">
            <img src={item.image} alt={item.message} className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-semibold dark:text-gray-200"> {item.message}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
            </div>
          </div>
        ))}
        <div className="mt-5">
          <Button className="hover:bg-light-gray hover:shadow-xl" color="black" bgColor={currentColor} text="See All Notifications" borderRadius="10px" width="full" />
        </div>
      </div>
    </div>
  )
}

export default Notification