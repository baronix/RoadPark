import React from 'react'
import Condicoes1 from "../assets/condicoes1.webp"
import Condicoes2 from "../assets/condicoes2.webp"
import Condicoes3 from "../assets/condicoes3.webp"
import { Link } from 'react-router-dom'
import AnimatedPage from './AnimatedPage'

const Condicoes = () => {
  return (
    <AnimatedPage>
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <div className='flex flex-col justify-center '>
                <img src={Condicoes1} alt="Caravana com toldo aberto" className=' mb-10 rounded-lg lg:hover:scale-105 duration-300 md:hidden'/>
                <p className='text-[#00df9a] uppercase font-bold font-mono'>Regras de aluguer 2023</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Condições</h1>
                <p className='my-3'>No Aluguer de autocaravana por mais de 5 dias não serão cobrados quaisquer custos adicionais pelos conjuntos de cama disponíveis.</p>
                <p className='my-3'>O condutor terá de apresentar a sua carta de condução e ser habilitado da própria há mais de 3 anos.</p>
                <p className='my-3'>A reserva da autocaravana só será efetuada após o pagamento do sinal de 25% do valor total da reserva.</p>
                <p className='my-3'>O pagamento do restante valor apenas será efetuado no ato da entrega da autocaravana ao cliente, após se dar início aos processos de aluguer.</p>
                <p className='my-3'>A caução de 500€ será paga pelo cliente no ato do pagamento restante da reserva e será devolvido ao cliente 300€ e o restante  no máximo 5 dias úteis após a devolução da autocaravana, após vistoria da mesma. Quaisquer estragos ou atividades de limpeza necessárias serão descontados do valor da caução.</p>
                <p className='my-3'>O cancelamento com devolução do sinal só será possível com aviso prévio mínimo de 8 dias úteis anteriores ao da reserva.</p>
                <p className='my-3'>A quilometragem não tem limite .</p>
                <p className='my-3'>A autocaravana será entregue com o depósito de combustível cheio, depósito de águas cinza e casséte vazias e limpas que deverão ser devolvidas de igual forma.</p>
                <p className='my-3'>Caso não seja realizada limpeza das águas cinza e cacete antes da devolução da autocaravana serão descontados 30€ do valor da caução.</p>
                <Link to="/autocaravanas"><button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a] hover:scale-105 duration-300'>Ver Autocaravanas</button></Link>
            </div>
            <div className='pl-4'>
              <img src={Condicoes1} alt="Caravana com toldo aberto" className='w-[500px] mx-auto my-4 rounded-lg lg:hover:scale-105 duration-300 hidden md:block'/>
              <img src={Condicoes2} alt="Caravana com toldo aberto" className='w-[500px] mx-auto my-4 rounded-lg lg:hover:scale-105 duration-300 hidden md:block'/>
              <img src={Condicoes3} alt="Caravana com toldo aberto" className='w-[500px] mx-auto my-4 rounded-lg lg:hover:scale-105 duration-300 hidden md:block'/>
            </div>
        </div>
    </div>
    </AnimatedPage>
  )
}

export default Condicoes