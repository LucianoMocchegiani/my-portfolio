import './Navbar.css';
import react,{useState} from 'react'
import iconnav from '../iconnav.png'
import iconnavazul from '../iconnavazul.png'

export default function Navbar() { 
  const [desplegar,setDesplegar]= useState(0)
  const desplegue =()=>{
    if(desplegar){
      setDesplegar(false)
    }else{
      setDesplegar(true)
    }
  }
  return (
    <div>
        {!desplegar&&<div className='div-navBar'>
            <a className='ancla sobreMi oculto' href="#sobreMi" >Sobre mi</a>
            <a className='ancla misProyectos oculto' href="#misProyectos" >Mis Proyectos</a>
            <a className='ancla contactame oculto' href="#contactame" >Contactame</a>
        </div>}
        {!desplegar&&<img src={iconnav} className='desplegar' onClick= {()=>desplegue()}/>}
        {desplegar&&<div className='div-navBar div-navBar-button'>
            <a className='ancla sobreMi' href="#sobreMi"onClick= {()=>desplegue()} >Sobre mi</a>
            <a className='ancla misProyectos' href="#misProyectos" onClick= {()=>desplegue()}>Mis Proyectos</a>
            <a className='ancla contactame' href="#contactame"onClick= {()=>desplegue()} >Contactame</a>   
        </div>}
        {desplegar&&<img src={iconnavazul} className='desplegar' onClick= {()=>desplegue()}/>}
    </div>
  )
}