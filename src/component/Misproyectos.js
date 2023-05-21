import { useState } from 'react';
import './Misproyectos.css';
import imagen3 from '../business-admin-imagen.png'
import imagen2 from '../timberli-project.png'
import imagen1 from '../henry-food.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NextArrow, PrevArrow} from './CustomArrowsSlider';
export default function Misproyectos(){
  const [onHover,setOnHover]= useState({on:false, in:null})
    const objProyect=[{name:'Henryfood',link:"https://pi-food-yqzu8pfxg-timberli.vercel.app/",imagen:imagen1,resumen:"HenryFood:   Es una app web donde se crean y se visualizan recetas de comidas. Las tecnologías utilizadas: React Redux en el frontend y Node.js, Express.js y Sequelize en el backend."}
      ,{name:'Timberli',link:"https://proyecto-final-orcin-seven.vercel.app/", imagen:imagen2, resumen: "Timberli:   Es una red social donde software developers suben y exponen su portfolio de proyectos. Las tecnologías utilizadas: React Redux en el frontend y Node.js, Express.js y Sequelize en el backend. Tiene autenticación (Oauth2.0), Método de pago implementado con STRIPE. "}
      ,{name:'BusinesAdmin',link:'https://businessadmin.vercel.app/',imagen:imagen3,resumen:"Busines Admin:   Web y App mobile para gestionar negocios comerciales, las tecnologias principales aplicadas son React , React Native con Expo y Firebase. "}]

      var settings = {
        
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return(<>
        <h1 className='title-mis-proyectos'id='misProyectos'>Mis proyectos </h1>
        <div className="misproyectos-container"> 
        <Slider {...settings}>
        {objProyect.map((item)=>(
          <a className='card' key={item.name+'1'} href={item.link} target="_blank" onMouseEnter={()=>setOnHover({on:true, in:item.name+'1'})} onMouseLeave={()=>setOnHover({on:false, in:null})}>
            {onHover.on&&<p key={item.name+'1'} className={onHover.in===item.name+'1'?'visitar':'displayNone'}>Visitar sitio web</p>}
            <div className='card-top'>
              <img src={item.imagen} alt={item.name} width={'500px'} height={'auto'}/>
              
            </div>
            <div className='card-bottom'>
              <p>{item.resumen}</p>
            </div>
          </a>
        ))}
        </Slider>
        </div>
        </>
    )
}
// {proyectoHover&&