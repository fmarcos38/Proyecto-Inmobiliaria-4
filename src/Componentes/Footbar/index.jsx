import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Logo from '../../Imagenes/Logo-Flor-2.jpg';

function Footbar() {
    return (
        <footer className='contFooter'>
            <div className="footer">
                <div className='divF'>
                    {/* logo */}
                    <a href='/home'>
                        <img  src={Logo} alt='' className='logo-footer'/>
                    </a>
                    <ul>
                        <li>
                            <h2>
                                <p>CONTACTANOS</p>
                            </h2>
                            <p>
                                Belgrano 2214 - Mar del Plata
                                <br></br>
                                Teléfono (0223) 4915977
                                <br></br>
                                Whatsapp +54 9 (223) 6349596
                                <br></br>
                                info@belluccipropiedades.com
                                <br></br>
                            </p>
                        </li>

                        <li>
                            <h2>
                                <p>Links</p>
                            </h2>
                            <div className='divLinks'>
                                <Link className='links-items'>Inicio</Link>
                                <Link className='links-items'>Ventas</Link>
                                <Link className='links-items'>Alquileres</Link>
                                <Link className='links-items'>Nosotros</Link>
                                <Link className='links-items'>Contacto</Link>
                            </div>
                        </li>

                        <li>
                            <h2><p>Seguinos</p></h2>
                            <a href='https://www.instagram.com/florm.bienesraices/'>
                                <InstagramIcon className='iconosRedes' />
                            </a>
                            <a href='http://api.whatsapp.com/send?phone=2234422665'>
                                <WhatsAppIcon className='iconosRedes' />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footbar;



/*

<div className='contFoot'>
                
                <div className="col1">
                    <a href='/home'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/6/62/Escudo_del_Club_Atl%C3%A9tico_San_Lorenzo_de_Almagro.png' alt='not found' className='logoFooter' />
                    </a>
                </div>
                
                <div className="col2">
                    <div className='tituloCategFoot'>
                        <h2>CONTACTANOS</h2>
                        <div className="line"></div>
                    </div>
                    
                    <p>Belgrano 2214 - Mar del Plata</p>
                    <p>Teléfono (0223) 4915977</p>
                    <p>Whatsapp +54 9 (223) 6349596</p>
                    <p>info@belluccipropiedades.com</p>
                </div>

                <div className="col2">
                    <div className='tituloCategFoot'>
                        <h2>LINKS</h2>
                        <div className="line"></div>
                    </div>
                    
                    <Link>Ventas</Link>
                    <Link>Alquileres</Link>
                    <Link>Locales</Link>
                    
                </div>
                
                <div className="column col4">
                    <div className='redesFoot'>
                        <h2>SEGUINOS EN</h2>
                        <a href='https://www.instagram.com/florm.bienesraices/'>
                            <InstagramIcon className='iconosRedes' />
                        </a>
                        <a href='http://api.whatsapp.com/send?phone=2234422665'>
                            <WhatsAppIcon className='iconosRedes' />
                        </a>
                    </div>

                </div>
            </div>

*/