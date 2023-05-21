import './Trabajemos.css';
import { useNavigate } from 'react-router';
import Icon from '@mdi/react';
import { mdiHandshakeOutline } from '@mdi/js';
import {useState } from 'react';


export default function Trabajemos(){
    const navigate = useNavigate()
    const [scrollY, setScrollY]= useState()
    window.addEventListener('scroll',function(event){
        var scroll = this.scrollY;
        setScrollY(scroll)
    })
    

    return(     
        <div className={scrollY>=1500?'trabajar-juntos-container aparecer2Animation':'trabajar-juntos-container'}>
            <p className='start-project'>¿Te interesa trabajar conmigo?</p>
            <button className='hagamoslo' onClick={()=>navigate('contactame')}><Icon path={mdiHandshakeOutline} size={1} color={'white'}/><p>Hagámoslo</p></button>   
        </div>
    )
}