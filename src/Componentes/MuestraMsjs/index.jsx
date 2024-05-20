// src/MessageCarousel.js
import React, { useState, useEffect } from 'react';
import './estilos.css';

const MessageCarousel = () => {
    const messages = [
        'CONSTRUIMOS CONFIANZA.',
        'REALIZAMOS TASACIONES',
        'ATENCIÓN PROFESIONAL',
        'NUESTROS CLIENTES NOS AVALAN',
    ];
    //estado index msj
    const [indexMsjActual, setIndexMsjActual] = useState(0);
    //estado aparece/desaparece msj
    const [aparece, setAparece] = useState(true);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setAparece(false);
            setTimeout(() => {
                setIndexMsjActual((prevIndex) => (prevIndex + 1) % messages.length);
                //actualizo estoado para q aparezca
                setAparece(true);
            },500);
        }, 3000);

        return () => clearInterval(intervalo); //reinicio el intervalo
    }, [messages.length]);

    return (
        <div className="message-carousel">
            <div className={`message ${aparece ? 'aparece' : 'desaparece'}`}>
                <h3>{messages[indexMsjActual]}</h3>
            </div>
        </div>
    );
};

export default MessageCarousel;
