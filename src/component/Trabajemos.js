import './Trabajemos.css';
import { useNavigate } from 'react-router';
import Icon from '@mdi/react';
import { mdiHandshakeOutline } from '@mdi/js';
import useScreenSize from '../functions/useScreenSize'
import useScrollXY from '../functions/useScrollXY'

export default function Trabajemos(){
    const navigate = useNavigate()
    const {scrollY}= useScrollXY()
    const {width} = useScreenSize();
    var value = width<=900?880:1500;
    if (width<=380){value=1250}

    

    return(     
        <div className={scrollY>=value?'trabajar-juntos-container aparecer2Animation':'trabajar-juntos-container'}>
            <p className='start-project'>¿Te interesa trabajar conmigo?</p>
            <button className='hagamoslo' onClick={()=>navigate('contactame')}><Icon path={mdiHandshakeOutline} size={1} color={'white'}/><p>Hagámoslo</p></button>   
        </div>
    )
}