
import './Contactame.css';
import emailjs from 'emailjs-com'

export default function Contactame(){
    window.scroll(0,0)

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
            <p className='contactameTitle' >Gracias por tomarse el tiempo para comunicarse. ¿Cómo puedo ayudarte?</p>   
            <form onSubmit={enviarMail} className='form'> 
                <input type='text'className='entradasCorreo1'id='email'name='email'placeholder='Correo electronico...'/>
                <input type='text'className='entradasCorreo2'id='email'name='nombre'placeholder='Su nombre...'/>
                <input type='text'className='entradasCorreo3'id='mensaje'name='mensaje'placeholder='Escriba su mensaje...'/>     
                <button type='submit'className='enviar'>Enviar</button>   
            </form>
        </div>
    )
}