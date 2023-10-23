import React from 'react'
import autostar1 from "../assets/autostar/autostar1.webp"
import autostar2 from "../assets/autostar/autostar2.webp"
import autostar3 from "../assets/autostar/autostar3.webp"
import autostar4 from "../assets/autostar/autostar4.webp"
import autostar5 from "../assets/autostar/autostar5.webp"
import autostar6 from "../assets/autostar/autostar6.webp"
import autostar7 from "../assets/autostar/autostar7.webp"
import autostar8 from "../assets/autostar/autostar8.webp"
import autostar9 from "../assets/autostar/autostar9.webp"
import autostar10 from "../assets/autostar/autostar10.webp"
import autostar11 from "../assets/autostar/autostar11.webp"
import autostar12 from "../assets/autostar/autostar12.webp"
import autostar13 from "../assets/autostar/autostar13.webp"
import autostar14 from "../assets/autostar/autostar14.webp"
import autostar15 from "../assets/autostar/autostar15.webp"
import autostar16 from "../assets/autostar/autostar16.webp"
import autostar17 from "../assets/autostar/autostar17.webp"
import autostar18 from "../assets/autostar/autostar18.webp"
import autostar19 from "../assets/autostar/autostar19.webp"
import autostar20 from "../assets/autostar/autostar20.webp"
import autostar21 from "../assets/autostar/autostar21.webp"
import autostar22 from "../assets/autostar/autostar22.webp"
import autostar23 from "../assets/autostar/autostar23.webp"
import autostar24 from "../assets/autostar/autostar24.webp"
import { Link } from 'react-router-dom'
import AnimatedPage from './AnimatedPage'


const Autostar = () => {
  return (
    <AnimatedPage>
    <div>
        <h1 className='px-10 my-5 pb-7 text-[#00df9a] font-bold max-w-[1240px] mx-auto font-mono text-center text-3xl uppercase'>Autocaravana Autostar</h1>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-[1240px] mx-auto">
            <div>
                <img class="h-auto max-w-full rounded-lg lg:hover:scale-105 duration-300" src={autostar1} alt=""/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg lg:hover:scale-105 duration-300" src={autostar2} alt=""/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg lg:hover:scale-105 duration-300" src={autostar3} alt=""/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg lg:hover:scale-105 duration-300" src={autostar4} alt=""/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg lg:hover:scale-105 duration-300" src={autostar5} alt=""/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg lg:hover:scale-105 duration-300" src={autostar6} alt=""/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg lg:hover:scale-105 duration-300" src={autostar7} alt=""/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg lg:hover:scale-105 duration-300" src={autostar8} alt=""/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg lg:hover:scale-105 duration-300" src={autostar9} alt=""/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg lg:hover:scale-105 duration-300" src={autostar22} alt=""/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg lg:hover:scale-105 duration-300" src={autostar23} alt=""/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg lg:hover:scale-105 duration-300" src={autostar24} alt=""/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg lg:hover:scale-105 duration-300" src={autostar10} alt=""/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg lg:hover:scale-105 duration-300" src={autostar11} alt=""/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg lg:hover:scale-105 duration-300" src={autostar12} alt=""/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg lg:hover:scale-105 duration-300" src={autostar13} alt=""/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg lg:hover:scale-105 duration-300" src={autostar14} alt=""/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg lg:hover:scale-105 duration-300" src={autostar15} alt=""/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg lg:hover:scale-105 duration-300" src={autostar16} alt=""/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg lg:hover:scale-105 duration-300" src={autostar17} alt=""/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg lg:hover:scale-105 duration-300" src={autostar18} alt=""/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg lg:hover:scale-105 duration-300" src={autostar19} alt=""/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg lg:hover:scale-105 duration-300" src={autostar20} alt=""/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg lg:hover:scale-105 duration-300" src={autostar21} alt=""/>
            </div>
        </div>
    <div className='flex flex-col items-center'>
                <Link to="/contacto"><button className='bg-[#00df9a] w-[200px] rounded-md mx-auto font-medium my-6 py-3 text-black hover:scale-105 duration-300'>Contacte-nos</button></Link>
            </div>
</div>
</AnimatedPage>

  )
}

export default Autostar