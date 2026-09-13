import React from 'react'
import { assets } from '../assets/assets'

const Ourpolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center'>
        <div>
            <img src={assests.exchange} className='w-12 m-auto mb-5' alt="" />
            <p className=' font-semibold'>EASY Exchange policy</p>
            <p className='text-gray-400'>We offer hassle free exchange policy</p>
        </div>
        <div>
            <img src={assests.quality} className='w-12 m-auto mb-5' alt="" />
            <p className=' font-semibold'>EASY Exchange policy</p>
            <p className='text-gray-400'>We offer hassle free exchange policy</p>
        </div>
        <div>
            <img src={assests.support} className='w-12 m-auto mb-5' alt="" />
            <p className=' font-semibold'>EASY Exchange policy</p>
            <p className='text-gray-400'>We offer hassle free exchange policy</p>
        </div>
    </div>
  )
}

export default Ourpolicy
