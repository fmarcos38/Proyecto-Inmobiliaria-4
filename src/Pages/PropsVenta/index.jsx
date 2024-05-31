import React from 'react';
import './estilos.css';
import { useSelector } from 'react-redux';
import ListaPropiedades from '../../Componentes/ListaPropiedades';
import BarraLateral from '../../Componentes/BarraLateral';


function PropsVenta() {

    const props = useSelector(state => state.propiedades);
    const soloEnVenta = props.filter(p => p.operacion === 'venta');

    return (
        <div className='cont-prop-Venta'>
            <h1>Propiedade en venta</h1>
            {/* contenedor filtros y lista props */}
            <div className='cont-filtros-listaProps'>
                {/* filtros */}
                <div className='cont-barraL'>
                    <BarraLateral />
                </div>

                {/* lista props */}
                <div className='cont-listaProps'>
                    <ListaPropiedades allProps={soloEnVenta} id='listaProps' />
                </div>
            </div>
        </div>
    )
}

export default PropsVenta