import React, { useEffect, useState } from 'react'
import './estilos.css';


function CarruselLanding() {
    const arrImgs = [
        'https://s36027.pcdn.co/wp-content/uploads/2018/05/10_sal_n.jpg', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7GWj_4eUYbKrNM5HHc09vnMWKAVw54HSD9KDh7xglle6URbYq_Bb8p0B5ZnZnGGe6Vgw&usqp=CAU',
        'https://static.inmofactory.com/images/inmofactory/documents/1/103879/35710682/650430494.jpg?rule=original'
    ];

    console.log("fotos:", arrImgs)
    const [indexActual, setIndexActual] = useState(0); //va cambiando el indice

    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndexActual(prevIndex => (prevIndex + 1) % arrImgs.length);
        }, 3000);

        /*  */
        return () => clearInterval(intervalo);
    }, [arrImgs.length]);

    return (
        <div className='cont-carruselL-landing'>
            <div className='cont-carruselL-btn-img'>
                <img src={arrImgs[indexActual]} alt={`Slide ${indexActual}`} className="imgCarruselLanding" />
            </div>
        </div>
    )
}

export default CarruselLanding