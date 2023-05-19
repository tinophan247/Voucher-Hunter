import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex h-20 justify-around shadow-lg'>
        <Link to='/' className='uppercase font-bold text-4xl flex items-center'>Voucher Hunter </Link>
        <div className='grid grid-cols-3 gap-10 items-center text-xl font-bold'>
            <button className='bg-green-neon hover:bg-green-neon-hover w-32 h-10 rounded-lg '> Sign Up </button>
            <button className='bg-green-neon hover:bg-green-neon-hover w-32 h-10 rounded-lg '> Sign In </button>
            <Link to='/admin'>
            <img src='./img/avatar.jpg' alt='not-found' className='w-12 h-12 rounded-full'/>
            </Link>
        </div>
    </div>
  )
}

export default Header;