
import './Contactame.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contactame(){
    window.scroll(0,0)
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7vp5zlj', 'template_0vl1hsg', form.current, '_ZfQzwicAJcI7E1ev')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        }).then(
            console.log(form.current)
        )

    }

    return(     
        <div className="divContactame">
            <div className='contactameId'id='contactame'></div>
            <p className='contactameTitle' >Gracias por tomarse el tiempo para comunicarse. ¿Cómo puedo ayudarte?</p>   
            <form ref={form} onSubmit={sendEmail} className='form'> 
                <input type='email'className='entradasCorreo1'id='email'name="user_email"placeholder='Correo electronico...'/>
                <input type='text'className='entradasCorreo2'id='email'name="user_name"placeholder='Su nombre...'/>
                <input type='text'className='entradasCorreo3'id='mensaje'name="message"placeholder='Escriba su mensaje...'/>     
                <input type='submit'className='enviar' value='Enviar'/>   
            </form>
        </div>
    )
}