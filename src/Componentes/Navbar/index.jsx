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
              <Link to={'/'} className='link-navbar-pG'>
                <li className='nav-items'>Inicio</li>
              </Link>
              <Link to={'/venta'} className='link-navbar-pG'>
                <li className='nav-items'>Venta</li>
              </Link>
              <Link to={'/alquiler'} className='link-navbar-pG'>
                <li className='nav-items'>Alquiler</li>
              </Link>
              <Link to={'/alquTemp'} className='link-navbar-pG'>
                <li className='nav-items'>Alquiler Temporario</li>
              </Link>
              <Link to={'/nosotros'} className='link-navbar-pG'>
                <li className='nav-items'>Nosotros</li>
              </Link>
              <Link to={'/contacto'} className='link-navbar-pG'>
                <li className='nav-items'>Contacto</li>
              </Link>
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
                    <Link to='/alqTemp' className='link-navbar'>Alquiler temporario</Link>
                  </li>
                  <li className='items-pChica'>
                    <Link to='/nosotros' className='link-navbar'>Nosotros</Link>
                  </li>
                  <li className='items-pChica'>
                    <Link to='/contacto' className='link-navbar'>Contacto</Link>
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