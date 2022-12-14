import react from 'react'
import './Sobremi.css';

export default function Sobremi(){
    return(
        <div className="divSobremi">
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
                    <p className='respuesta2'>• Sistemas operativos: Windows, Linux.</p>
                </div>  
            </div> 
        </div> 
    )
}