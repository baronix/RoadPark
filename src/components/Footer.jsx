import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 grid lg:grid-cols-3 text-gray-300'>
        <div className='cols-span-3 md:cols-span-1'>
            <p className='py-4 text-center lg:text-left'>RoadPark Renting 2023 ©</p>
            {/* <div className='flex md:w-[75%]'>
                <FaFacebookSquare size={25}/>
                <FaInstagramSquare size={25}/>
            </div> */}
        </div>
        <div className='´cols-span-3 md:col-span-1 md:ml-2'>
        </div>
        {/* <div className='cols-span-3 md:cols-span-1 flex justify-between'>
            <div>
                <h6 className='font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>
                        Analytics
                    </li>
                    <li className='py-2 text-sm'>
                        Marketing
                    </li>
                    <li className='py-2 text-sm'>
                        Commerce
                    </li>
                    <li className='py-2 text-sm'>
                        Insights
                    </li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Support</h6>
                <ul>
                    <li className='py-2 text-sm'>
                        API Status
                    </li>
                    <li className='py-2 text-sm'>
                        Pricing
                    </li>
                    <li className='py-2 text-sm'>
                        Documents
                    </li>
                    <li className='py-2 text-sm'>
                        Guides
                    </li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='py-2 text-sm'>
                        About
                    </li>
                    <li className='py-2 text-sm'>
                        Blog
                    </li>
                    <li className='py-2 text-sm'>
                        Jobs
                    </li>
                    <li className='py-2 text-sm'>
                        Press
                    </li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm'>
                        Claim
                    </li>
                    <li className='py-2 text-sm'>
                        Policy
                    </li>
                    <li className='py-2 text-sm'>
                        Terms
                    </li>

                </ul>
            </div>
        </div> */}
        
        <div className='´cols-span-3 md:col-span-1 md:ml-2'>

            <p className='py-4 text-center lg:text-right'>Website desenvolvido por <a className="text-[#00df9a]"href="https://cabum.pt">Cabum.pt</a></p>
                {/* <h6 className='font-medium text-gray-400'>Newsletter</h6>
                <div className='flex flex-col sm:flex-row justify-between w-full'>
                    <input type="email" name="" id="" placeholder='Enter email' className='p-3 my-auto flex w-full rounded-md text-black' />
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-2 ml-0 sm:ml-4 py-3 text-black'>Notify me</button>
                </div>
                <p className='text-gray-600'>We care about the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy</span>.</p>
             */}
        </div>    
    </div>
  )
}

export default Footer