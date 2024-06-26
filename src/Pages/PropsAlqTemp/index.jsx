import React from 'react';
import { useSelector } from 'react-redux';
import ListaPropiedades from '../../Componentes/ListaPropiedades';
import BarraLateral from '../../Componentes/BarraLateral';


function PropsAlqTemp() {

    const props = useSelector(state => state.propiedades);
    const alqTemp = props.filter(p => p.operacion === 'venta');

    return (
        <div className='cont-prop-Venta'>
            <h1>Propiedade en venta</h1>
            {/* contenedor filtros y lista props */}
            <div className='cont-filtros-listaProps'>
                {/* filtros */}
                <div className='cont-barraL'>
                    <BarraLateral muestraVentaAlq={false}/>
                </div>

                {/* lista props */}
                <div className='cont-listaProps'>
                    <ListaPropiedades allProps={alqTemp} id='listaProps' />
                </div>
            </div>
        </div>
    )
}

export default PropsAlqTemp