import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../Imagenes/Logo-Flor-2.jpg';
import './estilos.css';

function Navbar() {

  //estado para el icono del menú hamburg
  const [isOpen , setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav>
      <div className='conteiner-navbar'>
        {/* menu Izq */}
        <div className='contIzq'>
          {/* logo */}
          <NavLink to='/'>
            <img src={Logo} alt='' className='logo-navbar' />
          </NavLink>
        </div>

        {/* menu Derecha */}
        <div className='contDer'>
          {/* menu Derecho Pantalla Grande */}
          {/* items */}
          <div className='cont-items-navbar'>
            <ul className='nav-lista-items'>
              <li className='nav-items'>Inicio</li>
              <li className='nav-items'>En venta</li>
              <li className='nav-items'>En alquiler</li>
              <li className='nav-items'>Nosotros</li>
              <li className='nav-items'>Contacto</li>
            </ul>
          </div>


          {/* menu hambur P.Chica */}
          <div
            className={`menu-icon ${isOpen ? 'open' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          {/* menu desplegable P.chica*/}
          <div className="menu-desplegable">
            {
              isOpen && (
                <ul className='na-lista-pChica'>
                  <li className='items-pChica'>
                    <Link to='/' className='link-navbar'>Home</Link>
                  </li>
                  <li className='items-pChica'>
                    <Link to='/venta' className='link-navbar'>Venta</Link>
                  </li>
                  <li className='items-pChica'>
                    <Link to='/alquiler' className='link-navbar'>Alquiler</Link>
                  </li>
                  <li className='items-pChica'>
                    <Link to='/nosotros' className='link-navbar'>Nosotros</Link>
                  </li>
                </ul>
              )
            }
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar