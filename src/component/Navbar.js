import './Navbar.css';
import {useState} from 'react'
import Burger from './Burger'

export default function Navbar() { 
  const [clicked,setClicked] =useState(false)
  const handleClicked =()=>{
      setClicked(!clicked)
  }

  return (
    <div className={clicked?'container-navBar active-navBar':'container-navBar'}>     
        <div className='burger-navBar'><Burger clicked={clicked} handleClicked={handleClicked}/></div>
            <a className={clicked?'button-navBar':'buttonOculto-navBar'} href="#sobreMi" ><p className='textButton-Navbar'>Sobre mi</p></a>
            <a className={clicked?'button-navBar':'buttonOculto-navBar'} href="#misProyectos" ><p className='textButton-Navbar'>Mis Proyectos</p></a>
            <a className={clicked?'button-navBar':'buttonOculto-navBar'} href="#contactame" ><p className='textButton-Navbar'>Contactame</p></a>       
    </div>
  )
}