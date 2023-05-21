import './Trabajemos.css';
import { useNavigate } from 'react-router';
import Icon from '@mdi/react';
import { mdiHandshakeOutline } from '@mdi/js';



export default function Trabajemos(){
    const navigate = useNavigate()

    return(     
        <div className='trabajar-juntos-container'>
            <p className='start-project'>¿Te interesa trabajar conmigo?</p>
            <button className='hagamoslo' onClick={()=>navigate('contactame')}><Icon path={mdiHandshakeOutline} size={1} color={'white'}/><p>Hagámoslo</p></button>   
        </div>
    )
}