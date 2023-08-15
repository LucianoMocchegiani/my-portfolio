import {useState} from 'react'
import './Contactame.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router';
import {alertConfirmacion} from '../functions/Alert'


function validate(input) {
    let errors = {};
    if (!input.user_email) {
      errors.user_email = '*ingresa un email'
    // }else if (emailRegex.test(input.email)){
    //   errors.email = '*formato incorrecto'
    }
    if (!input.user_name){
      errors.user_name = '*ingresa un nombre'
    }else if (input.user_name.length > 80){
      errors.user_name = '*no puede contener mas de 80 caracteres'
    }
    if(!input.message){
      errors.message = '*ingresa un mensaje'
    }else if (input.message.length > 1000){
        errors.message = '*no puede contener mas de 1000 caracteres'
    }
    
    return errors;
  };
export default function Contactame(){
    const navigate = useNavigate()
    window.scroll(0,0)
    const form = useRef();

    const [datos,setDatos] = useState({
        user_email:'',
        user_name:'',
        message:''
    })
    const handleChangeText = (e) => {
        setDatos({ ...datos, [e.target.name]: e.target.value });
    };
    const [formErrors, setFormErrors] = useState(false)
  
    const emailjsSend = async ()=>{
        await emailjs.sendForm('service_7vp5zlj', 'template_0vl1hsg', form.current, '_ZfQzwicAJcI7E1ev')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            }).then(
                console.log(form.current)
            )
        setDatos(
            {user_email:'',
            user_name:'',
            message:''})
        // navigate('/')
        return true
    }

    const sendEmail = (e) => {
        e.preventDefault();
        // setFormErrors(true)
        if(Object.keys(validate(datos)).length){
            console.log(validate(datos))
            setFormErrors(true)
        }
        else{

            alertConfirmacion("Send message?",null,emailjsSend)
            setFormErrors(false)
        }
    }

    return(     
        <div className="divContactame">
            <div className='contactameId'id='contactame'></div>
            <p className='contactameTitle aparecer3Animation' >Thank you for taking the time to communicate. How can I help you?</p>   
            <form ref={form} onSubmit={sendEmail} className='form'> 
                <div className='entradasCorreo1Div'>
                    <input onChange={handleChangeText} value={datos.user_email} type='email'className='entradasCorreo1'id='email'name="user_email"placeholder='Email adress...'/>
                    <div className='redError-container'>{validate(datos).user_email&&formErrors&&<p className='redError'>{validate(datos).user_email}</p>}</div>
                </div>
                <div className='entradasCorreo2Div'>
                    <input onChange={handleChangeText} value={datos.user_name} type='text'className='entradasCorreo2'id='name'name="user_name"placeholder='Your name...'/>
                    <div className='redError-container'>{validate(datos).user_name&&formErrors&&<p className='redError'>{validate(datos).user_name}</p>}</div>
                </div>
                <div className='entradasCorreo3Div'>
                    <input onChange={handleChangeText} value={datos.message} type='text'className='entradasCorreo3'id='message'name="message"placeholder='Write your message...'/> 
                    <div className='redError-container'>{validate(datos).message&&formErrors&&<p className='redError'>{validate(datos).message}</p>}</div>
                </div>
                <input  type='submit'className='enviar aparecer4Animation' value='Send'/>   
            </form>
        </div>
    )
}