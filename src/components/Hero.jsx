import React from 'react'
import Typed from "react-typed";
import Fundo from "../assets/fundo.webp"
import { Link } from 'react-router-dom';
import AnimatedPage from './AnimatedPage';

const Hero = () => {
  return (
    <AnimatedPage>
    <div className='text-white' style={{ 
      backgroundImage: `url(${Fundo})`,
      height: "100%",
    }}>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2 font-mono uppercase'>RoadPark Renting</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Alugue uma caravana hoje mesmo!</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-xl font-bold py-4'>Descubra a beleza</p>
                <Typed 
                    className='md:text-5xl sm:text-xl font-bold pl-1 sm:pl-2 md:pl-3 lg:pl-4' 
                    strings={["da estrada.", "do mundo.", "de outro país."]} 
                    typeSpeed={120} 
                    backSpeed={140} 
                    loop
                />
            </div>
{/*             <p className='md:2xl text-xl font-bold text-gray-500 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis odio sunt facilis vero error suscipit voluptatum, eligendi neque quos velit, dolorum impedit quo repudiandae, quaerat aut eos voluptatem architecto natus.</p>
 */}            <Link to="/aluguer"><button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:scale-105 duration-300'>Condições de aluguer</button></Link>
        </div>
    </div>
    </AnimatedPage>
  )
}

export default Hero