import react from 'react'
import './Presentacion.css';
import Imagen from '../imga1.png'

export default function Presentacion() {     
    return (
        <div className="divPresentacion">
            <div className='hola'>
                <p>Hola!</p>  
                <p>Soy Luciano Mocchegiani</p>
                <p>Desarrollador Web</p>
            </div>
           <img className='imagen' src={Imagen} alt="imagen"/>                 
        </div>
    )       
}
