import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { filtraOperacionTipo, getProps, muestraDestacadas } from '../../Redux/Actions';
import FiltraPrecio from '../FIltroRangoPrecio';
import './estilos.css'; 
/* icono material */
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ApartmentIcon from '@mui/icons-material/Apartment';
import HomeIcon from '@mui/icons-material/Home';
import StorefrontIcon from '@mui/icons-material/Storefront';


const BarraLateral = ({muestraVentaAlq}) => {
    const [isOpen, setIsOpen] = useState(false);
    //estado para check venta/alq
    const [operacion, setTipo] = useState('all'); 
    const dispatch = useDispatch();
    
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
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
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <button className="toggle-button" onClick={toggleSidebar}>
                {
                    isOpen ? <p className={`${isOpen ? 'p-Open' : 'p-close'}`}>Filtros</p> : <FilterAltIcon />
                }
            </button>
            <div className="content">
                {
                    isOpen ? (
                        <div className='cont-titulo-filtro'>
                            {
                                muestraVentaAlq &&
                                <div className='opc-venta-alq'>
                                <div>
                                <label>VENTA</label>
                                <input
                                    id='venta'
                                    type="checkbox"
                                    value="venta"
                                    checked={operacion === 'venta'}
                                    onChange={handleFilterChange}
                                    className='input-check-venta'
                                />
                                </div>
                                <div>
                                <label>ALQUILER</label>
                                <input
                                    id='alquiler'
                                    type="checkbox"
                                    value="alquiler"
                                    checked={operacion === 'alquiler'}
                                    onChange={handleFilterChange}
                                    className='input-check-alq'
                                />
                                </div>
                            </div>
                            }

                            <div className='cont-btn-filtros'>
                                <button className='boton-filtros' id='depto' onClick={(e) => handleClick(e)}>Deptos</button>
                                <button className='boton-filtros' id='casa' onClick={(e) => handleClick(e)}>Casas</button>
                                <button className='boton-filtros' id='ph' onClick={(e) => handleClick(e)}>PH</button>
                                <button className='boton-filtros' id='local' onClick={(e) => handleClick(e)}>Locales</button>
                                <button className='boton-filtros' id='terreno' onClick={(e) => handleClick(e)}>Terrenos</button>
                                <button className='boton-filtros' id='oficina' onClick={(e) => handleClick(e)}>Oficinas</button>
                                <button className='boton-filtros' id='cochera' onClick={(e) => handleClick(e)}>Cocheras</button>
                                <button className='boton-filtros' id='destacada' onClick={(e) => handleClick(e)}>Destacadas</button>
                                <button className='boton-filtros' id='alqTemp' onClick={(e) => handleClick(e)}>Alquiler Temporario</button>
                                <button className='boton-filtros' id='todas' onClick={(e) => handleClick(e)}>Todas</button>
                            </div>

                            <FiltraPrecio operacion={operacion} />
                        </div>
                    ) : (
                        <div className='closed'>
                            <ApartmentIcon sx={{ margin: 0 }} />
                            <HomeIcon />
                            <StorefrontIcon />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default BarraLateral;