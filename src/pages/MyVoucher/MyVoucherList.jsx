import React from 'react'
import Header from '../../components/Header'
import ExtraHeader from '../../components/ExtraHeader'
import MyVoucherTable from './table'

const MyVoucherList = ()=> {
  return (
    <div className="w-full h-full">
    <Header />
    <ExtraHeader />
    <div className="flex justify-center">
      <div className="w-[70%]">
        <MyVoucherTable  />
      </div>
    </div>
  </div>
  )
}

export default MyVoucherList