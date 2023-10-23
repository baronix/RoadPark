import React from 'react'
import fotoChallenger from "../assets/challenger.webp"
import fotoAutostar from "../assets/autostar.webp"
import AnimatedPage from '../components/AnimatedPage'
import { Link } from 'react-router-dom'

const Modelos = () => {
  return (
    <AnimatedPage>
    <div className='bg-white'>
    <p className='px-10 my-5 pt-10 text-[#00df9a] font-bold max-w-[1240px] mx-auto font-mono uppercase'>Modelos de Autocaravanas disponíveis</p>
    <p className='px-10 my-5 max-w-[1240px] mx-auto '>Estamos entusiasmados em oferecer uma ampla variedade de modelos de autocaravanas, garantindo que você encontre a opção perfeita para suas necessidades de viagem.</p>
    <p className='px-10 my-5 max-w-[1240px] mx-auto'>Com uma seleção diversificada de tamanhos e funcionalidades, temos o prazer de atender desde famílias em busca de aventuras emocionantes até aventureiros individuais que desejam explorar destinos pitorescos. Nossas autocaravanas são projetadas para oferecer o máximo conforto e conveniência, proporcionando uma experiência de viagem verdadeiramente inesquecível.</p>
    <p className='px-10 my-5 max-w-[1240px] mx-auto'>Encontre aqui a autocaravana dos seus sonhos para sua próxima jornada!</p>
    <div className='bg-white  items-center md:flex grid-col-2 max-w-[1240px] mx-auto'>
        <div className='cols-span-2 md:cols-span-1 p-10'>
            <Link to="/autostar"><img src={fotoAutostar} alt="Autocaravana Autostar" className='rounded-lg lg:hover:scale-105 duration-300'/></Link>
            <Link to="/autostar"><h1 className='font-bold text-center mt-5 text-5xl'>Autostar</h1></Link>
        </div>
        <div className='cols-span-2 md:cols-span-1 mx-auto  p-10'>
            <Link to="/challenger"><img src={fotoChallenger} alt="Autocaravana Challenger" className='rounded-lg lg:hover:scale-105 duration-300' /></Link>
            <Link to="/challenger"><h1 className='font-bold text-center mt-5 text-5xl'>Challenger</h1></Link>
        </div>
    </div>
    </div>
    </AnimatedPage>
  )
}

export default Modelos