import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Componentes/Navbar';
import Home from './Paginas/Home';
import Footbar from './Componentes/Footbar';
import DetalleProp from './Paginas/DetallePropiedad';

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/detalle/:id' element={<DetalleProp/>}/>
        {/* <Route path='/venta' element={<PropsVenta/>} />
        <Route path='/alquiler' element={<PropsAlquiler/>} />
        <Route path='/nosotros' element={<Nosotros/>} />
        <Route path='/contacto' element={<ContactForm/>} /> */}
      </Routes>
      
      {/* footbar */}
      <Footbar/>
    </div>
  );
}

export default App;
