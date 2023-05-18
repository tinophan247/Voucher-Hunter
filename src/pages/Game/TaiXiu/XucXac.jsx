import React from 'react'
import {useSelector} from 'react-redux'

const XucXac = () => {
    const {diceArray} = useSelector((state) => state.chineseDice)

  return (
    <div className='flex'>
        {diceArray.map((item, index) => {
            return <img key={index} src={item.img} alt='not-found' className='w-32 h-32'/>
        })}
    </div>
  )
}

export default XucXac;