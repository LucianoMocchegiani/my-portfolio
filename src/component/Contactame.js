import react from 'react'
import './Contactame.css';
import linkedin from '../linkedin.png'
import github from '../github.png'
import instagran from '../instagran.png'
import twiter from '../twiter.png'
import whatsapp from '../whatsapp.png'
import emailjs from 'emailjs-com'

export default function Contactame(){
    
    const enviarMail = (e)=>{       
        e.preventDefault();
        emailjs.sendForm('service_50e21pu','template_fc3ok68',e.target,'0o8mcv869UgSykydv')
        .then(res=>{
          alert('se a enviado correctamente.');
          console.log(res);
        })
    }

    return(     
        <div className="divContactame">
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
            <form onSubmit={enviarMail} className='form'> 
                <input type='text'className='entradasCorreo1'id='email'name='email'placeholder='Correo electronico...'/>
                <input type='text'className='entradasCorreo2'id='email'name='nombre'placeholder='Su nombre...'/>
                <input type='text'className='entradasCorreo3'id='mensaje'name='mensaje'placeholder='Escriba su mensaje...'/>     
                <button type='submit'className='enviar'>Enviar</button>   
            </form>
        </div>
    )
}