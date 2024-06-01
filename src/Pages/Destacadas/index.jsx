import React from 'react';
import { useSelector } from 'react-redux';
import ListaPropiedades from '../../components/ListaPropiedades';
import Filtros from '../../components/Filtros';


function PropsVenta() {

    const props = useSelector(state => state.propiedades);
    const destacada = props.filter(p =>  p.destacada === true);

    return (
        <div className='cont-prop-Venta'>         
            <div className='cont-titulo-props-venta'> 
                <h1>Propiedades Destacadas</h1>
                {/* filtros */}
                <div className='cont-filtros-venta'>
                    <Filtros mostrarVentaAlq={true}/>
                </div>
                <div className='cont-destacadas'>
                    <ListaPropiedades allProps={destacada} />
                </div>
            </div>            
        </div>
    )
}

export default PropsVenta