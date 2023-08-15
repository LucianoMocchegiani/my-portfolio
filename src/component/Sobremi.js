import react from 'react'
import './Sobremi.css';
import Imagen from '../pantallas.png'
import Techs from './Sobremidos'
export default function Sobremi(){
    return(
        <div className="divSobremi" id='sobreMi'>
        <div className="divSobremi2">

            <div className='text1'>
                <p className='pregunta'>Hello !</p> 
                <p className='respuesta'>I am Luciano Mocchegiani, Full Stack Developer, with knowledge applicable to web projects and mobile applications, to be carried out in a scalable and modularized way to better optimize the functionality and maintenance of the application.</p>
            </div>
            <div className='text3'>
                <p className='pregunta'>Technologies and methodologies </p>
                <div className='respuesta'>
                    <p className='respuesta2'>• Languages: Javascript, Python, C#.</p>
                    <p className='respuesta2'>• Mobile: React Native ,Expo.</p> 
                    <p className='respuesta2'>• Front-end: React, Redux, HTML, CSS.</p>
                    <p className='respuesta2'>• Back-end: Node, Express. </p>
                    <p className='respuesta2'>• Database: SQL, PostgreSQL, Sequelize, GoogleCloud.</p> 
                    <p className='respuesta2'>• Collaborative development: Git, GitHub.</p>
                    <p className='respuesta2'>• Work methodologies: Scrum, Agile.</p> 
                    <p className='respuesta2'>• Operating systems: Windows, Linux.</p>
                </div>  
                
            </div> 
        </div> 
            <Techs/>
        </div>
    )
}