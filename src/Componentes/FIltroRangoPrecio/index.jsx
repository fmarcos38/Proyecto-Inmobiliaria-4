import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filtraPrecio } from '../../Redux/Actions';
import './styles.css';

const FiltraPrecio = ({operacion}) => {
    const [minPrice, setMinPrice] = useState(10000);
    const [maxPrice, setMaxPrice] = useState(1000000);
    const dispatch = useDispatch();

    const handleMinPriceChange = (event) => {
        const value = Math.min(Number(event.target.value), maxPrice - 5000);
        setMinPrice(value);
    };

    const handleMaxPriceChange = (event) => {
        const value = Math.max(Number(event.target.value), minPrice + 5000);
        setMaxPrice(value);
    };

    /* para btn aplicar filtro precio */
    const handleClickFiltroPrecio = () => {
        dispatch(
            filtraPrecio(
                {
                    min: minPrice,
                    max: maxPrice,
                    operacion: operacion
                }                
            )
        );
    };

    return (
        <div className="price-range-filter">
            <div className="price-range-slider">
                <label style={{ marginBottom: '15px' }}>P. Min</label>
                <input style={{ marginBottom: '15px' }}
                    type="range"
                    min="10000"
                    max="1000000"
                    step="5000"
                    value={minPrice}
                    onChange={(e) => { handleMinPriceChange(e) }}
                    className="slider"
                />
                <span>${minPrice.toLocaleString()}</span>
            </div>
            <div className="price-range-slider">
                <label style={{ marginBottom: '15px' }}>P. Max</label>
                <input style={{ marginBottom: '15px' }}
                    type="range"
                    min="10000"
                    max="1000000"
                    step="5000"
                    value={maxPrice}
                    onChange={(e) => { handleMaxPriceChange(e) }}
                    className="slider"
                />
                <span>${maxPrice.toLocaleString()}</span>
            </div>
            {/* btn aplicar filtro precio */}
            <button 
                variant="contained"
                onClick={() => {handleClickFiltroPrecio()}}
                className='btn-aplicar'
            >
                Aplicar Filtro de Precios
            </button>
        </div>
    );
};

export default FiltraPrecio;
