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



export default function Sobremi(){
    return(
        <div className='techsContainer'>
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



        </div>
    )

}