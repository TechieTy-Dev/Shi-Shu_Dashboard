import React from 'react'
import {BsCurrencyDollar} from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
import {IoIosMore} from 'react-icons/io'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'

import {Stacked, Pie, Button, LineChart, SparkLine} from '../components'
import { earningData, medicalproBranding, recentTranscations, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy'
import { useStateContext } from '../context/ContextProvider'
import product8 from '../data/product8.jpg'

const Ecommerce = () => {

  const { currentColor, currentMode} = useStateContext();
  return (
    <div className='mt-12'>
      <div className="flex flex-wrap justify-center lg:flex-nowrap ">
          <div className='w-full p-8 m-3 bg-white bg-center bg-no-repeat bg-cover dark:text-gray-200 dark:bg-secondary-dark-bg h-44 lg:w-80 rounded-xl pt-9 bg-hero-pattern'>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-gray-400"> Earnings </p>
                <p className="text-2xl">$82,935</p>
              </div>
            </div>
            <div className="mt-6">
              <Button color={currentColor} bgColor={currentColor} text="Download" borderRadius="10px" />
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-1 m-3">
            {earningData.map((item) => (
              <div key={item.title} className="p-4 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 pt-9 rounded-2xl">
                <button type="button" style={{ color: item.itemColor, backgroundColor: item.iconBg}} className="rounded-full text-2xl opacity-0.9 p-4 shadow-xl hover:drop-shadow-xl">{item.icon}</button>
                <p className="mt-3">
                  <span className='text-lg font-semibold'>{item.amount}</span>
                  <span className={`text-sm text-${item.pcColor} ml-2`}>{item.percentage}</span>
                </p>
                <p className='mt-1 text-sm text-gray-400'>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-wrap justify-center gap-10 '>
          <div className='p-4 m-3 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-780'>
            <div className='flex justify-between'>
              <p className="font-semibold font-xl">Revenue Updates</p>
              <div className='flex items-center gap-4'>
                <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                  <span> <GoPrimitiveDot /></span>
                  <span>Expense</span>
                </p>
                <p className='flex items-center gap-2 text-green-600 hover:drop-shadow-xl'>
                  <span> <GoPrimitiveDot /></span>
                  <span>Budget</span>
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-10 mt-10">
              <div className="pr-10 m-4 border-r-1 border-color">
                <div>
                  <p>
                    <span className='text-3xl font-semibold'>$129,048</span>
                    <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 text-xs ml-3'>32%</span>
                  </p>
                  <p className='mt-1 text-gray-500'>Budget</p>
                </div>
                <div className="mt-8">
                  <p>
                    <span className='text-3xl font-semibold'>$51,720</span>
                  </p>
                  <p className='mt-1 text-gray-500'>Expenses</p>
                </div>
                <div className='mt-5 '>
                  <SparkLine currentColor={currentColor} id="line-sparkLine" type="Line" height="80px" width="250px" data={SparklineAreaData}
                  color={currentColor}/>
                </div>
                <div className="mt-10">
                  <Button text="Download Report" borderRadius="10px" bgColor={currentColor} color="white" />
                </div>
              </div>
              <div>
                <Stacked currentMode={currentMode} width="320px" height="360px" />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Ecommerce