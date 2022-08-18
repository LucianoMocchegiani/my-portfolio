import './App.css';
import fondo from './Vector5.png'
import Navbar from './component/Navbar';
import Presentacion from './component/Presentacion'
import Sobremi from './component/Sobremi'
import Misproyectos from './component/Misproyectos'
import Contactame from './component/Contactame'
function App() { 
 
  return (
    <div className="contenedor-general">
      <div><img className='imagenFondo'src={fondo} alt="imgFondo"/></div>  
      <Navbar/>
      <Presentacion/>
      <Sobremi/>
      <Misproyectos/>
      <Contactame/>
      <div className='footer'>
        <p>© Luciano Mocchegiani - 2022</p>
      </div>
    </div>
  );
}

export default App;
