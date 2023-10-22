import React from 'react'
import Autostar from '../components/caravanas/Autostar'
import Challenger from '../components/caravanas/Challenger'
import fotoChallenger from "../assets/challenger.jpg"
import fotoAutostar from "../assets/autostar.jpg"

const Autocaravanas = () => {
  return (
    <div className='bg-white pt-20 pb-20 items-center md:flex grid-col-2'>
        <div className='cols-span-2 md:cols-span-1 p-10'>
            <img src={fotoAutostar} alt="Autocaravana Autostar" className='rounded-lg hover:scale-105 duration-300'/>
            <h1 className='font-bold text-center mt-5 text-5xl'>Autostar</h1>
        </div>
        <div className='cols-span-2 md:cols-span-1 mx-auto  p-10'>
            <img src={fotoChallenger} alt="Autocaravana Challenger" className='rounded-lg hover:scale-105 duration-300' />
            <h1 className='font-bold text-center mt-5 text-5xl'>Challenger</h1>
        </div>
    </div>
  )
}

export default Autocaravanas