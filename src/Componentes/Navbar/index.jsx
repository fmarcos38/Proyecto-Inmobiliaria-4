import React from 'react'
import Logo from '../../Imagenes/Logo-Flor-2.jpg';
import Img  from '../../Imagenes/wallpaperbetter.jpg';
import './estilos.css';
import ArrowDown from '../Flecha-animada';

function Navbar() {
  return (
    <div className='cont-principal-navbar'>
      <div className='cont-navbar'>
        {/* barra superior */}
        <div className='cont-logo'>
          <img src={Logo} alt='' className='logo' />
        </div>
        {/* items */}
        <div className='cont-items-navbar'>
          <ul>
            <li>Inicio</li>
            <li>En venta</li>
            <li>En alquiler</li>
            <li>Nosotros</li>
            <li>Contacto</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar