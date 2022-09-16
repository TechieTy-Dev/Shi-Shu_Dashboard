import React from 'react'

const ChartsHeader = ({ category, title}) => {
  return (
    <div className='mb-10'>
      <div>
        <p className="text-lg text-gray-400">Chart</p>
        <p className='text-3xl font-extrabold tracking-tight dark:tight-gray-300 text-slate-900 dark:text-white'>{category}</p>
      </div>
      <p className="mt-3 mb-2 text-xl text-center dark:text-gray-300">{title}</p>
    </div>
  )
}

export default ChartsHeader