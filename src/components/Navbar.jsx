import React, {useState} from "react";
import {AiOutlineClose} from "react-icons/ai";
import {BiMenuAltRight} from "react-icons/bi";
import { Link } from "react-router-dom";
import LogoRoadPark from "../assets/logoroadpark.webp"



const Navbar = () => {
const [nav,setNav] = useState(false);

const handleNav = () => {
    setNav(!nav)
}

    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
            <Link to="/inicio"><img className="p-4 w-[120px] hover:scale-105 duration-300" src={LogoRoadPark} alt="RoadPark" /></Link>
            <ul className="hidden md:flex">
                <li className="p-4 hover:scale-105 duration-300"><Link to="/inicio">Início</Link></li>
                <li className="p-4 hover:scale-105 duration-300"><Link to="/aluguer">Aluguer</Link></li>
                <li className="p-4 hover:scale-105 duration-300"><Link to="/autocaravanas">Autocaravanas</Link></li>
                <li className="p-4 hover:scale-105 duration-300"><Link to="/sobre">Sobre</Link></li>
                <li className="p-4 hover:scale-105 duration-300"><Link to="/contacto">Contacto</Link></li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                    {nav ? <AiOutlineClose size={45}/> : <BiMenuAltRight size={45}/>}    
            </div>
            <div className={nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500" : "ease-in-out duration-500 fixed left-[-100%]" }>
                <img className="p-4 mt-4" src={LogoRoadPark} alt="RoadPark" />
                <ul className="uppercase p-4">
                    <li className="p-4"><Link to="/inicio" onClick={handleNav}>Início</Link></li>
                    <li className="p-4"><Link to="/aluguer" onClick={handleNav}>Aluguer</Link></li>
                    <li className="p-4"><Link to="/autocaravanas" onClick={handleNav}>Autocaravanas</Link></li>
                    <li className="p-4"><Link to="/sobre" onClick={handleNav}>Sobre</Link></li>
                    <li className="p-4"><Link to="/contacto" onClick={handleNav}>Contacto</Link></li>
                </ul>
            </div>
        </div>
    )
}
 
export default Navbar