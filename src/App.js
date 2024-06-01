import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Componentes/Navbar';
import Home from './Pages/Home';
import Footbar from './Componentes/Footbar';
import DetalleProp from './Pages/DetallePropiedad';
import PropsVenta from './Pages/PropsVenta';
import PropsAlquiler from './Pages/PropsAlquiler';
import PropsAlqTemp from './Pages/PropsAlqTemp';
import Nosotros from './Pages/Nosotros';
import Contactanos from './Pages/Contactanos'
import { InmobiliariaProvider } from './Context';


function App() {
  return (
    <InmobiliariaProvider>
      <div className="App">
        {/* navbar */}
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detalle/:id' element={<DetalleProp />} />
          <Route path='/venta' element={<PropsVenta />} />
          <Route path='/alquiler' element={<PropsAlquiler />} />
          <Route path='/alqTemp' element={<PropsAlqTemp/>} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/contacto' element={<Contactanos />} />
        </Routes>

        {/* footbar */}
        <Footbar />
      </div>
    </InmobiliariaProvider>

  );
}

export default App;
