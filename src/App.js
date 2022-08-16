import './App.css';
import Imagen from './imga1.png'
import linkedin from './linkedin.png'
import github from './github.png'
import instagran from './instagran.png'
import twiter from './twiter.png'
import whatsapp from './whatsapp.png'
import react,{useState,useEffect} from 'react'
import emailjs from 'emailjs-com'
import fondo from './Vector4.png'
function App() { 
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
  
  const enviarMail = (e)=>{
    e.preventDefault();
    emailjs.sendForm('service_50e21pu','template_fc3ok68',e.target,'0o8mcv869UgSykydv')
    .then(res=>{
      alert('se a enviado correctamente.');
      console.log(res);
    })
  }
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
        <div><img className='imagenFondo'src={fondo} alt="imgFondo"/></div>  
        {!desplegar&&<div className='div-navBar'>
            <a className='ancla sobreMi oculto' href="#sobreMi" >Sobre mi</a>
            <a className='ancla misProyectos oculto' href="#misProyectos" >Mis Proyectos</a>
            <a className='ancla contactame oculto' href="#contactame" >Contactame</a>
        </div>}
        {!desplegar&&<button className='desplegar' onClick= {()=>desplegue()}></button>}
        {desplegar&&<div className='div-navBar div-navBar-button'>
            <a className='ancla sobreMi' href="#sobreMi" >Sobre mi</a>
            <a className='ancla misProyectos' href="#misProyectos" >Mis Proyectos</a>
            <a className='ancla contactame' href="#contactame" >Contactame</a>   
        </div>}
        {desplegar&&<button className='desplegar' onClick= {()=>desplegue()}></button>}
        <div className='hola'>
          <p>Hola!</p>  
          <p>Soy Luciano Mocchegiani</p>
          <p>Full Stack Developer</p>
        </div>
        <img className='imagen' src={Imagen} alt="imagen"/>
        <div className='sobreMiId'id='sobreMi'></div>
        <div className='text1'>
          <p className='pregunta'>¿Quien soy?</p>
          <p className='respuesta'>Desarrollador Full Stack, con conocimientos aplicables a proyectos webs, a realizarse de forma escalable y modularizados para optimizar de mejor manera el trabajo en equipo.</p>
        </div>
        <div className='text2'>
          <p className='pregunta'>¿Por que yo?</p>
          <p className='respuesta'>Hay desarrolladores con muy buenas habilidades técnicas en el área. ademas de ser uno de esos,me considero realmente competente, analítico , pongo mucho empeño en la resolución de problemas, y siempre dispuesto a aprender mas, y enseñar lo que se.</p>
        </div>
        <div className='text3'>
          <p className='pregunta'>Tecnologías y metodologías </p>
          <div className='respuesta'><p className='respuesta2'>• Front-end: JavaScript, React, Redux, HTML, CSS.</p>
          <p className='respuesta2'>• Back-end: JavaScript, Node, Express. </p>
          <p className='respuesta2'>• Base de datos: SQL, PostgreSQL, Sequelize.</p> 
          <p className='respuesta2'>• Desarrollo colaborativo: Git, GitHub.</p>
          <p className='respuesta2'>• Metodologías de trabajo: Scrum, Agile.</p> 
          <p className='respuesta2'>• Sistemas operativos: Windows, Linux.</p></div>  
        </div>   
        <div className='misProyectosId'id='misProyectos'></div>
        <div className='misProyectosTitle'><p>Mis Proyectos</p></div>
        <div className='divProyecto'></div>
        {!proyectoHover&&<a href={linksProyectos[carrusel]}><img className='imagenProyectoAnt' src={imagenesProyectos[carruselRotation("anterior")]} alt={"imagen "+carruselRotation("anterior")}></img></a>}
        {<a onMouseOver={()=>setProyectoHover(true)} onMouseOut={()=>setProyectoHover(false)} href={linksProyectos[carrusel]}><img className='imagenProyecto' src={imagenesProyectos[carrusel]} alt={"imagen "+carrusel}></img></a>}
        {!proyectoHover&&<a href={linksProyectos[carrusel]}><img className='imagenProyectoSig' src={imagenesProyectos[carruselRotation("siguiente")]} alt={"imagen "+carruselRotation("siguiente")}></img></a>}
        <button className="buttonCarrusel1" onClick={()=>carruselProyectos("<")}>{"<"}</button>
        <button className="buttonCarrusel2" onClick={()=>carruselProyectos(">")}>{">"}</button>
        {proyectoHover&&<div className='divResumeProyecto'><p>{resumenesProyectos[carrusel]}</p></div>}
        <div className='contactameId'id='contactame'></div>
        <p className='contactameTitle' >Contactame</p>
        <div className='iconosRedes'>
          <a href="https://www.linkedin.com/in/luciano-mocchegiani/"><img className='icon1' src={linkedin} alt="linkedin"/></a>
          <a href="https://github.com/LucianoMocchegiani"><img className='icon2' src={github} alt="github"/></a>
          <a href="https://instagram.com/mocchegianiluciano"><img className='icon3' src={instagran} alt="instagran"/></a>
          <a href="https://twitter.com/luciano4444444"><img className='icon4' src={twiter} alt="twiter"/></a>
          <a href="https://wa.me/1164897908"><img className='icon5' src={whatsapp} alt="whatsapp"/></a>
        </div>
        <p className='contactame2Title'>Enviame un correo</p>     
        <form onSubmit={enviarMail}>
          <input type='text'className='entradasCorreo1'id='email'name='email'placeholder='Correo electronico...'/>
          <input type='text'className='entradasCorreo2'id='email'name='nombre'placeholder='Su nombre...'/>
          <input type='text'className='entradasCorreo3'id='mensaje'name='mensaje'placeholder='Escriba su mensaje...'/>     
          <button type='submit'className='enviar'>Enviar</button>   
        </form>
        <div className='footer'>
          <p>© Luciano Mocchegiani - 2022</p>
        </div>
    </div>

  );
}

export default App;
