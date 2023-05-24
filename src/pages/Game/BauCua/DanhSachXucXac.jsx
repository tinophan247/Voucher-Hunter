import React from 'react'
import { useSelector } from 'react-redux'
import XucXac from './XucXac';

const DanhSachXucXac = () => {
    const {DiceArray} = useSelector(state => state.BauCua);

  return (
    <div className='bg-yellow-100 w-40 h-40 rounded-full mt-10'>
        <div >
            <XucXac diceItem={DiceArray[0]}/>
        </div>
    </div>
  )
}

export default DanhSachXucXac