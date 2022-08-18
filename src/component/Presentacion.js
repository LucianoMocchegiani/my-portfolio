import react from 'react'
import './Presentacion.css';
import Imagen from '../imga1.png'

export default function Presentacion() {     
    return (
        <div>
            <div className='hola'>
                <p>Hola!</p>  
                <p>Soy Luciano Mocchegiani</p>
                <p>Full Stack Developer</p>
            </div>
            <img className='imagen' src={Imagen} alt="imagen"/>                   
        </div>
    )       
}
