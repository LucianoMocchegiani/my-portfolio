import GoogleIcon from '../google-cloud-icon.png';
import CssIcon from '../css-icon.png';
import ExpoIcon from '../expo_icon.png';
import GitIcon from '../Git-Icon.png';
import HtmlIcon from '../html-icon.png';
import JvascriptIcon from'../javascript-icon.png';
import NodeIcon from '../node-icon.png';
import PostgrestIcon from '../postgres-icon.png';
import ReactIcon from '../React-icon.png';
import ReduxIcon from '../redux-icon.png';
import SequalizeIcon from '../sequalize-icon.png';
import SqlIcon from '../sql-icon.png';
import useScrollXY from '../functions/useScrollXY'
import useScreenSize from '../functions/useScreenSize'

export default function Sobremi(){
    const {scrollY}= useScrollXY()
    const {width} = useScreenSize();
    console.log(width)
    console.log(scrollY+ 'scrollY')
    var value = width<=900?520:520;
    return(
        <div className='techsContainer'>
            {scrollY>=value?
            <>
                <img className='imgIcon aparecerAnimation'src={JvascriptIcon}/>
                <img className='imgIcon aparecerAnimation'src={NodeIcon}/>
                <img className='imgIcon aparecerAnimation'src={ReactIcon}/>
                <img className='imgIcon aparecerAnimation'src={ReduxIcon}/>
                <img className='imgIcon aparecerAnimation'src={HtmlIcon}/>
                <img className='imgIcon aparecerAnimation'src={CssIcon}/>
                <img className='imgIcon aparecerAnimation'src={ExpoIcon}/>
                <img className='imgIcon aparecerAnimation'src={GoogleIcon}/>
                <img className='imgIcon aparecerAnimation'src={SqlIcon}/>
                <img className='imgIcon aparecerAnimation'src={SequalizeIcon}/>
                <img className='imgIcon aparecerAnimation'src={PostgrestIcon}/>
                <img className='imgIcon aparecerAnimation'src={GitIcon}/>
            </>:
            <>
                <img className='imgIcon'src={JvascriptIcon}/>
                <img className='imgIcon'src={NodeIcon}/>
                <img className='imgIcon'src={ReactIcon}/>
                <img className='imgIcon'src={ReduxIcon}/>
                <img className='imgIcon'src={HtmlIcon}/>
                <img className='imgIcon'src={CssIcon}/>
                <img className='imgIcon'src={ExpoIcon}/>
                <img className='imgIcon'src={GoogleIcon}/>
                <img className='imgIcon'src={SqlIcon}/>
                <img className='imgIcon'src={SequalizeIcon}/>
                <img className='imgIcon'src={PostgrestIcon}/>
                <img className='imgIcon'src={GitIcon}/>
            </>}



        </div>
    )

}