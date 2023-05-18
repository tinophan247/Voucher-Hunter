import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex h-20 justify-around shadow-lg'>
        <Link to='/' className='uppercase font-bold text-4xl flex items-center'>Voucher Hunter </Link>
        <div className='grid grid-cols-3 gap-10 items-center text-xl font-bold'>
            <button className='bg-green-neon hover:bg-green-neon-hover w-32 h-10 rounded-lg '> Sign Up </button>
            <button className='bg-green-neon hover:bg-green-neon-hover w-32 h-10 rounded-lg '> Sign In </button>
            {/* <button className='bg-gray-200 w-12 h-12 rounded-full text-sm'> Logo </button> */}
            <img src='./img/avatar.jpg' alt='not-found' className='w-12 h-12 rounded-full'/>
        </div>
    </div>
  )
}

export default Header