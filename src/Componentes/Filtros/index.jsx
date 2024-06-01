import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { filtraOperacionTipo, getProps, muestraDestacadas } from '../../Redux/Actions';
import './estilos.css'; // Importar estilos CSS

const Filtros = ({muestraVentaAlq}) => {

    ///estado para check venta/alq
    const [operacion, setTipo] = useState('all'); 
    const dispatch = useDispatch();
    
    const handleFilterChange = (event) => {
        const { value } = event.target;
        setTipo(value === operacion ? 'all' : value);
    };

    const handleClick = (e) => {
        switch (e.target.id) {
            case 'depto':
                if (operacion === 'venta') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'venta', tipo: 'depto' }));
                } else if (operacion === 'alquiler') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'alquiler', tipo: 'depto' }));
                } else {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ tipo: 'depto' }));
                }
                break;
            case 'casa':
                if (operacion === 'venta') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'venta', tipo: 'casa' }));
                } else if (operacion === 'alquiler') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'alquiler', tipo: 'casa' }));
                } else {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ tipo: 'casa' }));
                }
                break;
            case 'ph':
                if (operacion === 'venta') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'venta', tipo: 'ph' }));
                } else if (operacion === 'alquiler') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'alquiler', tipo: 'ph' }));
                } else {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ tipo: 'ph' }));
                }
                break;
            case 'local':
                if (operacion === 'venta') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'venta', tipo: 'local' }));
                } else if (operacion === 'alquiler') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'alquiler', tipo: 'local' }));
                } else {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ tipo: 'local' }));
                }
                break;
            case 'terreno':
                if (operacion === 'venta') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'venta', tipo: 'terreno' }));
                } else if (operacion === 'alquiler') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'alquiler', tipo: 'terreno' }));
                } else {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ tipo: 'terreno' }));
                }
                break;
            case 'oficina':
                if (operacion === 'venta') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'venta', tipo: 'oficina' }));
                } else if (operacion === 'alquiler') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'alquiler', tipo: 'oficina' }));
                } else {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ tipo: 'oficina' }));
                }
                break;
            case 'cochera':
                if (operacion === 'venta') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'venta', tipo: 'cochera' }));
                } else if (operacion === 'alquiler') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'alquiler', tipo: 'cochera' }));
                } else {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ tipo: 'cochera' }));
                }
                break;
            case 'destacada':
                if (operacion === 'venta') {
                    dispatch(getProps());
                    dispatch(muestraDestacadas({ operacion: 'venta', destacada: true }));
                } else if (operacion === 'alquiler') {
                    dispatch(getProps());
                    dispatch(muestraDestacadas({ operacion: 'alquiler', destacada: true }));
                } else {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ tipo: 'destacada' }));
                }
                break;
            case 'todas':
                dispatch(getProps());
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        
            if(operacion === 'all'){ dispatch(getProps()); }
            if(operacion === 'venta'){ 
                dispatch(getProps());
                dispatch(filtraOperacionTipo({ operacion: 'venta' })); 
            }
            if(operacion === 'alquiler'){ 
                dispatch(getProps());
                dispatch(filtraOperacionTipo({ operacion: 'alquiler' })); 
            }
        
        //dispatchAction();
    }, [dispatch, operacion]);

    return (
        <div className='cont-filtros' >
            <div className='cont-titulo-filtro'>
                <p>Filtros</p>
            </div>

            {
                muestraVentaAlq &&
                <div className='opc-venta-alq'>
                    <div>
                    <label>VENTA</label>
                    <input
                        type='checkbox'
                        value="venta"
                        checked={operacion === 'venta'}
                        onClick={(e) => handleFilterChange(e)}
                        className='input-check-venta'
                    />
                    </div>
                    <div>
                    <label>ALQUILER</label>
                    <input
                        type='checkbox'
                        value="alquiler"
                        checked={operacion === 'alquiler'}
                        onClick={(e) => handleFilterChange(e)}
                        className='input-check-alq'
                    />
                    </div>
                </div>
            }

            <div className='cont-btn-filtros'>
                <button className='btn-filtros' id='depto' onClick={(e) => handleClick(e)}>Deptos</button>
                <button className='btn-filtros' id='casa' onClick={(e) => handleClick(e)}>Casas</button>
                <button className='btn-filtros' id='ph' onClick={(e) => handleClick(e)}>PH</button>
                <button className='btn-filtros' id='local' onClick={(e) => handleClick(e)}>Locales</button>
                <button className='btn-filtros' id='terreno' onClick={(e) => handleClick(e)}>Terrenos</button>
                <button className='btn-filtros' id='oficina' onClick={(e) => handleClick(e)}>Oficinas</button>
                <button className='btn-filtros' id='cochera' onClick={(e) => handleClick(e)}>Cocheras</button>
                <button className='btn-filtros'  id='destacada' onClick={(e) => handleClick(e)}>Destacadas</button>
                <button className='btn-filtros' id='todas'  onClick={(e) => handleClick(e)}>Todas</button>
            </div>
        </div>
    );
};

export default Filtros;
