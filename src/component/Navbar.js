import './Navbar.css';
import {useState} from 'react'
import Burger from './Burger'
import Avatar from '../Avatar.png'
import { useNavigate } from 'react-router';
const { REACT_APP_PATCH } = process.env
export default function Navbar() { 
  const patch = window.location.href
  const navigate = useNavigate()
  const [clicked,setClicked] =useState(false)
  const handleClicked =()=>{
      setClicked(!clicked)
  }
  const contactameFunction=()=>{
    setClicked(false)
    navigate('contactame')
  }
  if(patch===(REACT_APP_PATCH +'/contactame')){
    return (
      <div className={clicked?'container-navBar active-navBar':'container-navBar'}>     
              <img onClick={()=>navigate('/')}className='buttonHome' src={Avatar} width={45} height={'auto'}/>
              <div className='container-navBar2'>
              </div>       
      </div>
    )
  }else{
  return (
    <div className={clicked?'container-navBar active-navBar':'container-navBar'}>     
            {!clicked&& <img  onClick={()=>navigate('/')} className='buttonHome' src={Avatar} width={45} height={'auto'}/>}
            <div className='burger-navBar'><Burger clicked={clicked} handleClicked={handleClicked}/></div>
            <a className={clicked?'button-navBar':'buttonOculto-navBar'} href="#sobreMi" ><p className='textButton-Navbar'>Sobre mi</p></a>
            <a className={clicked?'button-navBar':'buttonOculto-navBar'} href="#misProyectos" ><p className='textButton-Navbar'>Mis proyectos</p></a>
            <a className={clicked?'button-navBar':'buttonOculto-navBar'} onClick={()=>contactameFunction()}><p className='textButton-Navbar contactame'>Contactame</p></a>
    </div>
  )
}}