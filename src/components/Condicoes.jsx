import React from 'react'
import Condicoes1 from "../assets/condicoes1.webp"
import Condicoes2 from "../assets/condicoes2.webp"
import Condicoes3 from "../assets/condicoes3.webp"
import Calendario from "../assets/calendario.webp"
import { Link } from 'react-router-dom'
import AnimatedPage from './AnimatedPage'

const Condicoes = () => {
  return (
    <AnimatedPage>
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <div className='flex flex-col justify-center '>
                <img src={Condicoes3} alt="Caravana com toldo aberto" className=' mb-10 rounded-lg lg:hover:scale-105 duration-300 md:hidden'/>
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
                <img src={Calendario} alt="" className='mt-5' />
                <div className='grid grid-cols-2 mt-5'>
                  <div className='border-x border-y px-3 pb-4'>
                    <h3 className='font-bold mt-4  mb-3'>Amarelo - Época baixa</h3>
                    <p>09 janeiro a 16 de abril</p>
                    <p>23 outubro a 19 dezembro</p>
                  </div>
                  <div className='border-x border-y px-3 pb-4'>
                    <h3 className='font-bold mt-4 mb-3'>Verde - Época média</h3>
                    <p>17 abril a 31 maio</p>
                    <p>18 setembro 22 outubro</p>
                  </div>
                  <div className='border-x border-y px-3 pb-4'>
                    <h3 className='font-bold mt-4 mb-3'>Vermelho - Época alta</h3>
                    <p>1 de junho a 15 setembro</p>
                  </div>
                  <div className='border-x border-y px-3 pb-4'>
                    <h3 className='font-bold mt-4 mb-3'>Azul- ÉPOCAS FESTIVAS E FERIADOS</h3>
                    <p>Carnaval 5 dias (09 a 13 de fevereiro em 2023)</p>
                    <p>Páscoa 5 dias (06 a 10 de abril de 2023)</p>
                    <p>Natal e Ano Novo 19 dias (20 de dezembro a 8 de janeiro de 2023)</p>
                  </div>
                </div>
                <div className='my-5'>
                    <p><span className='font-bold'>Época alta</span> reserva mínimo 5 dias.</p>
                    <p><span className='font-bold'>Época baixa e média</span> reserva mínimo 3 dias.</p>
                  </div>
                <h2 className='text-xl font-bold mb-3'>Valores por diária</h2>
                <div className='grid grid-cols-2'>
                  <div className='border-x border-y px-3 pb-4'>
                    <h3 className='font-bold mt-4 mb-1 '>Austostar (4 pessoas)</h3>
                    <p>Época baixa- 70€</p>
                    <p>Época média- 80€</p>
                    <p>Época alta- 90€</p>
                    <p>Época Festiva/Feriados- 90€</p>
                  </div>
                  <div className='border-x border-y px-3 pb-4'>
                    <h3 className='font-bold mt-4 mb-1'>Challenger (6 pessoas)</h3>
                    <p>Época baixa- 80€</p>
                    <p>Época média- 90€</p>
                    <p>Época alta- 100€</p>
                    <p>Época Festiva/Feriados- 100€</p>
                   </div> 
                </div>
                <div className='flex flex-col items-center'>
                  <Link to="/autocaravanas"><button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a] hover:scale-105 duration-300'>Ver Autocaravanas</button></Link>
                </div>           
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