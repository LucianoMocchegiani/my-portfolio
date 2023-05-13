import react,{useState} from 'react'
import './Misproyectos.css';
import imagen3 from '../business-admin-imagen.png'
import imagen2 from '../timberli-project.png'
import imagen1 from '../henry-food.png'

export default function Misproyectos(){
    
    const imagenesProyectos=[imagen1,
    imagen2,imagen3]
    const linksProyectos=["https://pi-food-yqzu8pfxg-timberli.vercel.app/","https://proyecto-final-orcin-seven.vercel.app/",'https://businessadmin.vercel.app/']
    const resumenesProyectos=["HenryFood: Tecnologías React Redux en el frontend y Node.js, Express.js y Sequelize en el backend. es una app donde se crean y se visualizan recetas de comidas.",
    "Timberli:   Hice esta app en conjunto con un grupo de compañeros utilizamos git  usamos las tecnologías React Redux en el frontend y Node.js, Express.js y Sequelize en el backend. Tiene autenticación (Oauth2.0), Método de pago implementado con STRIPE. la idea de la app es ser una red social donde software developers Jr puedan subir y exponer su portfolio de proyectos, para mostrarse al mundo y recibir feedback.",
    "Busines Admin: Web y App mobile para gestionar negocios comerciales."]
    const [carrusel, setCarrusel] = useState(0);
    const carruselProyectos=(valor)=>{
      if(valor==">"&&carrusel==imagenesProyectos.length-1){
        setCarrusel(0)
      }else if(valor=="<"&&carrusel==0){
        setCarrusel(imagenesProyectos.length-1)
      }else if (valor==">"){
        setCarrusel(carrusel+1)
      }else if(valor=="<"){
        setCarrusel(carrusel-1)
      }
    }
    const carruselRotation =(f)=>{
      if (carrusel===0&& f ==="anterior"){
        return imagenesProyectos.length-1
      }
      else if (carrusel===imagenesProyectos.length-1&& f ==="siguiente"){
        return 0
      }
      else if(f === "siguiente"){
        return carrusel+1
      }
      else if(f ==="anterior"){
        return carrusel-1
      }
    }
    const [proyectoHover, setProyectoHover] = useState(false);

    return(
        <div className="divProyectos">
            <div className='misProyectosId'id='misProyectos'></div>
            <div className='misProyectosTitle'><p>Mis Proyectos</p></div>
            <div className='divProyecto'>
              <div className='contenedor-botones'>
                <button className="buttonCarrusel1" onClick={()=>carruselProyectos("<")}>{"<"}</button>
                <button className="buttonCarrusel2" onClick={()=>carruselProyectos(">")}>{">"}</button>
              </div>
              <a href={linksProyectos[carrusel]}><img className='imagenProyectoAnt' src={imagenesProyectos[carruselRotation("anterior")]} alt={"imagen "+carruselRotation("anterior")}></img></a>
              <a onMouseOver={()=>setProyectoHover(true)} onMouseOut={()=>setProyectoHover(false)} href={linksProyectos[carrusel]}><img className='imagenProyecto' src={imagenesProyectos[carrusel]} alt={"imagen "+carrusel}></img></a>
              <a href={linksProyectos[carrusel]}><img className='imagenProyectoSig' src={imagenesProyectos[carruselRotation("siguiente")]} alt={"imagen "+carruselRotation("siguiente")}></img></a>
              <div onMouseOver={()=>setProyectoHover(true)} onMouseOut={()=>setProyectoHover(false)} href={linksProyectos[carrusel]} className='divResumeProyecto'><p>{resumenesProyectos[carrusel]}</p></div>
            </div>
            
        </div>
    )
}
// {proyectoHover&&