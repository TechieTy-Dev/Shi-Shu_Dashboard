import React from 'react'
import { pieChartData } from '../../data/dummy'
import { ChartsHeader, Pie as PieChart } from '../../components'

const Pie = () => {
  return (
    <div className="p-10 m-4 mt-24 bg-white md:m-10 dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Pie" title="Project Cost Breakdown" />
      <div className='w-full'> 
      <PieChart id="pie-chart" data={pieChartData} legendVisibility height="full" />
      </div>
    </div>
  )
}

export default Pie