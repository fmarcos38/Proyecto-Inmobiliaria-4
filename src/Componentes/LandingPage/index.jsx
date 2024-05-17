import React from 'react';
import './estilos.css';
import CarruselLanding from '../CarruselLanding';

function LandingPage() {
    return (
        <div className='cont-principal-landing'>
            <div className='cont-textos'>
                <div className='cont-texto-1'>
                    
                        <h2>
                            Comprar, vender o alquilar tu casa puede ser una realidad.
                        </h2>
                    
                </div>

                <div className='cont-carrusel'>
                    <CarruselLanding/>
                </div>
            </div>
        </div>
    )
}

export default LandingPage