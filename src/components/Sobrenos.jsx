import React from 'react'
import Sobre1 from "../assets/sobre1.jpg"
import Sobre2 from "../assets/sobre2.jpg"
import Sobre3 from "../assets/sobre3.jpg"
import { Link } from 'react-router-dom'

const Sobrenos = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <div className='pr-4'>
              <img src={Sobre1} alt="Caravana com toldo aberto" className='w-[500px] mx-auto my-4 rounded-lg hover:scale-105 duration-300'/>
              <img src={Sobre2} alt="Caravana com toldo aberto" className='w-[500px] mx-auto my-4 rounded-lg hover:scale-105 duration-300 hidden md:block'/>
              <img src={Sobre3} alt="Caravana com toldo aberto" className='w-[500px] mx-auto my-4 rounded-lg hover:scale-105 duration-300 hidden md:block'/>
            </div>
            
            <div className='flex flex-col justify-center '>
                <p className='text-[#00df9a] uppercase font-bold'>Sobre nós</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Bem-vindo à RoadPark Renting - A Sua Aventura Sobre Rodas!</h1>
                <p className='my-3'>Somos apaixonados por viagens, aventuras e pela liberdade de explorar o mundo à nossa maneira. É por isso que decidimos compartilhar essa paixão com você, oferecendo a oportunidade de viver experiências únicas e inesquecíveis através do aluguer de autocaravanas.</p>
                <p className='my-3'>A nossa história começou com um grupo de amigos e entusiastas das viagens que queriam tornar as escapadelas de estrada mais acessíveis e convenientes para todos. Desde então, temos vindo a crescer e a aperfeiçoar a nossa frota, os nossos serviços e o nosso compromisso em proporcionar-lhe a melhor experiência de viagem possível.</p>
                <p className='my-3'>O que nos torna especiais:</p>
                <p className='my-3'><span className='font-bold'>1. Autocaravanas de Qualidade Superior:</span> A nossa frota de autocaravanas é composta por veículos de alta qualidade, cuidadosamente mantidos e equipados com todas as comodidades necessárias para tornar a sua viagem confortável e memorável.</p>
                <p className='my-3'><span className='font-bold'>2. Liberdade de Exploração:</span> Acreditamos que as melhores experiências acontecem quando se tem a liberdade de escolher o seu próprio caminho. Com as nossas autocaravanas, você pode explorar destinos deslumbrantes, parques nacionais, praias remotas e cidades vibrantes, tudo no seu próprio ritmo.</p>
                <p className='my-3'><span className='font-bold'>3. Equipa Dedicada:</span> A nossa equipa está aqui para o ajudar em todas as fases da sua viagem. Desde o momento em que faz a reserva até ao seu regresso, estamos disponíveis para responder a perguntas, fornecer orientações e garantir que tenha uma experiência tranquila.</p>
                <p className='my-3'><span className='font-bold'>4. Compromisso com a Sustentabilidade:</span> Preocupamo-nos com o meio ambiente e estamos empenhados em minimizar o nosso impacto. Implementamos práticas sustentáveis na nossa operação e encorajamos os nossos clientes a serem responsáveis durante as viagens.</p>
                <p className='my-3'><span className='font-bold'>5. Aventuras Personalizadas:</span> Quer esteja a planear umas férias em família, uma escapadela romântica ou uma aventura a solo, podemos adaptar a sua experiência de aluguer às suas necessidades e desejos específicos.</p>
                <p className='my-3'>Na RoadPark Renting, não se trata apenas de alugar uma autocaravana; trata-se de criar memórias que durarão toda a vida. Junte-se a nós na estrada e descubra o mundo de uma forma que só o aluguer de autocaravanas pode proporcionar.</p>
                <p className='my-3'>Estamos ansiosos para ser parte das suas histórias de viagem e ajudá-lo a explorar novos horizontes. Não hesite em contactar-nos para obter mais informações ou para fazer uma reserva. A sua próxima aventura está apenas a um clique de distância!</p>
                <p className='my-3 italic'>Junte-se a nós e comece a sua jornada hoje!</p>
                <Link to="/contacto"><button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a] hover:scale-105 duration-300'>Contacte-nos</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Sobrenos