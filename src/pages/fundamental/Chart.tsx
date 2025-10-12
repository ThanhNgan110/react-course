import React from 'react'
import ControlPanel from '../../components/chart/ControlPanel'
import CarbonPanel from '../../components/chart/CarbonPanel'
import Variable from '../../components/chart/Variable'

function Chart() {
  return (
    <div className='flex justify-between gap-4'>
      <div className='w-[320px] border h-[500px] shrink-0'>
        <ControlPanel />
      </div>

      <div className='w-full border h-[500px] shrink-1'>
        <CarbonPanel />
      </div>

      <div className='w-[320px] border h-[500px] shrink-0'>
        <Variable />
      </div>
    </div>
  )
}

export default Chart