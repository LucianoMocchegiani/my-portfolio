import react,{useState} from 'react'
import './Misproyectos.css';

export default function Misproyectos(){
    
    const imagenesProyectos=["https://camo.githubusercontent.com/6558936db11734287b508089ba329beb8dafbfeac498a993f582a5edd2a5874b/68747470733a2f2f692e706f7374696d672e63632f72704c76594d6e4b2f436170747572612d64652d70616e74616c6c612d64652d323032322d30362d31312d31392d34352d30342e706e67",
    "https://camo.githubusercontent.com/e86680d6cb82db6667a045c9601a31dc749a00ea585841101b4b65fc14c34754/68747470733a2f2f692e706f7374696d672e63632f4331344b445971592f436170747572612d64652d70616e74616c6c612d64652d323032322d30372d30342d32302d31332d32372e706e67"]
    const linksProyectos=["https://client-food-project.herokuapp.com/home","https://proyecto-final-orcin-seven.vercel.app/"]
    const resumenesProyectos=["HenryFood:   Este fue un proyecto individual del bootcamp Henry hice esta app con las tecnologías React Redux en el frontend y Node.js, Express.js y Sequelize en el backend. es una app donde se crean y se visualizan recetas de comidas.",
    "Timberli:   Hice esta app en conjunto con un grupo de compañeros utilizamos git  usamos las tecnologías React Redux en el frontend y Node.js, Express.js y Sequelize en el backend. Tiene autenticación (Oauth2.0), Método de pago implementado con STRIPE. la idea de la app es ser una red social donde software developers Jr puedan subir y exponer su portfolio de proyectos, para mostrarse al mundo y recibir feedback."]
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
        <div>
            <div className='misProyectosId'id='misProyectos'></div>
            <div className='misProyectosTitle'><p>Mis Proyectos</p></div>
            <div className='divProyecto'></div>
            <a href={linksProyectos[carrusel]}><img className='imagenProyectoAnt' src={imagenesProyectos[carruselRotation("anterior")]} alt={"imagen "+carruselRotation("anterior")}></img></a>
            <a onMouseOver={()=>setProyectoHover(true)} onMouseOut={()=>setProyectoHover(false)} href={linksProyectos[carrusel]}><img className='imagenProyecto' src={imagenesProyectos[carrusel]} alt={"imagen "+carrusel}></img></a>
            <a href={linksProyectos[carrusel]}><img className='imagenProyectoSig' src={imagenesProyectos[carruselRotation("siguiente")]} alt={"imagen "+carruselRotation("siguiente")}></img></a>
            <div className='contenedor-botones'>
              <button className="buttonCarrusel1" onClick={()=>carruselProyectos("<")}>{"<"}</button>
              <button className="buttonCarrusel2" onClick={()=>carruselProyectos(">")}>{">"}</button>
            </div>
            {proyectoHover&&<div onMouseOver={()=>setProyectoHover(true)} onMouseOut={()=>setProyectoHover(false)} href={linksProyectos[carrusel]} className='divResumeProyecto'><p>{resumenesProyectos[carrusel]}</p></div>}
        </div>
    )
}