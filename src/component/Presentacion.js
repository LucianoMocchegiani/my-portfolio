import react from 'react'
import './Presentacion.css';
import Imagen from '../imga1.png'
import Avatar from '../Avatar.png'

export default function Presentacion() {     
    return (
        <div className="divPresentacion">
            <div className='hola'>
                
                <p className='title aparecer3Animation'>Full Stack Developer</p>
                <p className='subTitle aparecer3Animation'>I develop web pages and mobile applications in the most optimal way.</p>
                <div className='aparecer2Animation'><img src={Avatar} width={270} height={'auto'}/></div>
                
            </div>
                          
        </div>
    )       
}
