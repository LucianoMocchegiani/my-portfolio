import './App.css';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import fondo from './Vector5.png'
import Navbar from './component/Navbar';
import Presentacion from './component/Presentacion'
import Sobremi from './component/Sobremi'
import Misproyectos from './component/Misproyectos'
import Contactame from './component/Contactame'
import Trabajemos from './component/Trabajemos'
import linkedin from './linkedin-white.png'
import github from './github-white.png'
import instagran from './instagran-white.png'
import twiter from './twiter-white.png'
import whatsapp from './whatsapp-white.png'
function Footer(){
  return (
    <div className='footer'>
    <div className='iconosRedes'>
              <a href="https://www.linkedin.com/in/luciano-mocchegiani/" target="_blank"><img className='icon1 footerIcon' src={linkedin} alt="linkedin"/></a>
              <a href="https://github.com/LucianoMocchegiani" target="_blank"><img className='icon2 footerIcon' src={github} alt="github"/></a>
              <a href="https://instagram.com/mocchegianiluciano" target="_blank"><img className='icon3 footerIcon' src={instagran} alt="instagran"/></a>
              <a href="https://twitter.com/luciano4444444" target="_blank"><img className='icon4 footerIcon' src={twiter} alt="twiter"/></a>
              <a href="https://wa.me/1164897908" target="_blank"><img className='icon5 footerIcon' src={whatsapp} alt="whatsapp"/></a>
          </div>
      <p className='footertext'>© Luciano Mocchegiani - 2022</p>
    </div>
  )
}
function Home() { 

  return (
    <div className="contenedor-general">
      {/* <div><img className='imagenFondo'src={fondo} alt="imgFondo"/></div>   */}
      <Presentacion/>
      <Sobremi/>
      <Misproyectos/>
      <Trabajemos/>
      {/* <Contactame/> */}
    </div>
  );
}
function App() {
  return (
    <BrowserRouter> 
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contactame" element={<Contactame/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter> 
  )
}
export default App;
