import React, { useState } from 'react'
import {arrImgs} from '../../Imagenes/ImgsCarruselLanding/arrImgs.js';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function CarruselLanding() {

    const [imgActual, setImgActual] = useState(arrImgs[0]);

    const handlePrev = () => {
        if (imgActual === 0) {
            return
        } else {
            setImgActual(imgActual + 1);
        }
    };
    const handleNext = () => {
        if (setImgActual === arrImgs.length - 1) {
            return
        } else {
            setImgActual(imgActual - 1);
        }
    };

    return (
        <div className='cont-carrusel-landing'>
            <div className='cont-carrusel-btn-img'>
                <button className='btn-carrusel-prev' onClick={() => handlePrev()}>
                    <ArrowBackIosNewIcon />
                </button>
                <img src={imgActual} alt='' />
                <button className='btn-carrusel-next' onClick={() => handleNext()}>
                    <ArrowForwardIosIcon />
                </button>
            </div>
        </div>
    )
}

export default CarruselLanding