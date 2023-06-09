import React from 'react';
import { loaderImg } from '../assets/constants'

const Loader = ({ title }) => {
  return (
    <div className='w-full flex justify-center items-center flex-col'>
      <img src={loaderImg} alt='loader' className="w-32 h-32 object-contain" />
      <h1 className='font-blod text-2xl text-white mt-2'>{title || 'Loading...'}</h1>
      </div>
  )
}

export default Loader