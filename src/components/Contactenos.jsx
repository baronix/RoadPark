import React from 'react'
import {FaInstagram, FaFacebookSquare} from "react-icons/fa"
import AnimatedPage from './AnimatedPage'


const Contactenos = () => {
  return (
    <AnimatedPage>
    <div className=''>
        
<div className="container my-24 mx-auto md:px-6 max-w-[1240px]">
  <p className=' my-5 text-[#00df9a] font-bold  mx-auto font-mono uppercase'>Contacte-nos através dos seguintes meios</p>
  <section className="mb-32 ">
      
    <div
      className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div className="flex flex-wrap items-center">
        <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
          <div className="h-[500px] w-full">
            <iframe title='localizacao' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24922.436439199202!2d-9.178289047448729!3d38.66486825273227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19351c09ff1135%3A0xfca6dceb642ad67a!2sAlmada!5e0!3m2!1sen!2spt!4v1698012501347!5m2!1sen!2spt"
              className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" frameborder="0"
              allowfullscreen></iframe>
          </div>
        </div>
        <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12 ">
          <div className="flex flex-wrap px-3 pt-12 pb-12 md:pb-0 lg:pt-0 ">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
              <div className="flex items-start">
                <div className="shrink-0 ">
                  <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                      stroke="currentColor" className="h-6 w-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold text-black">
                    Telemóvel
                  </p>
                  <p className="text-neutral-500 dark:text-neutral-200 hover:scale-105 duration-300">
                    <a href='tel:+351915688243' >+351 91 568 8243</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                    <FaFacebookSquare size={25}/>
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold dark:text-white">
                    Facebook
                  </p>
                  <p className="text-neutral-500 dark:text-neutral-200 hover:scale-105 duration-300">
                    <a href='https://www.facebook.com/people/Road-Park/pfbid0GrgUnjcdsbms2PgQo32C6z2AwyAY7tSBHmxD5dMhrjDgadLJ9VnUPBaUbXeguMKUl/' >Road Park</a>
                  </p>

                </div>
              </div>
            </div>
            <div
              className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:mb-0 xl:w-6/12 xl:px-12">
              <div className="align-start flex">
                <div className="shrink-0">
                  <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                      stroke="currentColor" className="h-6 w-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold dark:text-white">Email</p>
                  <p className="text-neutral-500 dark:text-neutral-200 hover:scale-105 duration-300">
                    <a href='mailto:roadpark2023@gmail.com'  >roadpark2023@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
              <div className="align-start flex">
                <div className="shrink-0">
                  <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                    <FaInstagram size={25}/>
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold dark:text-white">Instagram</p>
                  <p className="text-neutral-500 dark:text-neutral-200 hover:scale-105 duration-300">
                    <a href="https://www.instagram.com/_roadpark/" >@_roadpark</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
    </div>
    </AnimatedPage>
  )
}

export default Contactenos