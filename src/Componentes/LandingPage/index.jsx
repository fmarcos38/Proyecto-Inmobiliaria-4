import React from 'react';
import './estilos.css';
import CarruselLanding from '../CarruselLanding';
import MessageCarousel from '../MuestraMsjs';
import ArrowDown from '../Flecha-animada';

function LandingPage() {
    return (
        <div className='cont-principal-landing'>
            <div className='cont-elementos'>
                <div className='cont-textos'>
                    <div>
                        <h1>
                            Comprar, vender o alquilar tu casa puede ser una realidad.
                        </h1>
                    </div>
                    <div className='cont-mnsjs'>
                        <MessageCarousel/>
                    </div>
                    <div className='cont-flecha'>
                        <ArrowDown/>
                    </div>
                </div>

                <div className='cont-carusel-land'>
                    <CarruselLanding/>                    
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
