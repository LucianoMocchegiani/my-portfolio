import {useState} from 'react'
import './Misproyectos.css';
import imagen3 from '../business-admin-imagen.png'
import imagen2 from '../timberli-project.png'
import imagen1 from '../henry-food.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NextArrow, PrevArrow} from './CustomArrowsSlider';
export default function Misproyectos(){
    const objProyect=[{link:"https://pi-food-yqzu8pfxg-timberli.vercel.app/",imagen:imagen1,resumen:"HenryFood:   Es una app web donde se crean y se visualizan recetas de comidas, utilice las siguientes tecnologias React Redux en el frontend y Node.js, Express.js y Sequelize en el backend."}
      ,{link:"https://proyecto-final-orcin-seven.vercel.app/", imagen:imagen2, resumen: "Timberli:   La idea de la app es ser una red social donde software developers Jr puedan subir y exponer su portfolio de proyectos, para mostrarse al mundo y recibir feedback. Las tecnologías utilizadas: React Redux en el frontend y Node.js, Express.js y Sequelize en el backend. Tiene autenticación (Oauth2.0), Método de pago implementado con STRIPE. "}
      ,{link:'https://businessadmin.vercel.app/',imagen:imagen3,resumen:"Busines Admin:   Web y App mobile para gestionar negocios comerciales, las tecnologias principales aplicadas son React , React Native con Expo y Firebase. "}]

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
          <a className='card' href={item.link} target="_blank">
            <div className='card-top'>
              <img src={item.imagen} alt={item.name} width={'500px'} height={'auto'}/>
              <h1>{item.name}</h1>
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