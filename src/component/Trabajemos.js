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
    var value = width<=900?1200:1500;
    if (width<=380){value=1360}

    

    return(     
        <div className={scrollY>=value?'trabajar-juntos-container aparecer2Animation':'trabajar-juntos-container'}>
            <p className='start-project'>Are you interested in working with me?</p>
            <button className='hagamoslo' onClick={()=>navigate('contactame')}><Icon path={mdiHandshakeOutline} size={1} color={'white'}/><p>let's do it</p></button>   
        </div>
    )
}