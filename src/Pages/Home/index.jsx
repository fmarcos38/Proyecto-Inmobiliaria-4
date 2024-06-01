import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles.css';
import ListaPropiedades from '../../Componentes/ListaPropiedades';
import LandingPage from '../../Componentes/LandingPage';
import Loading from '../../Componentes/Loading';
import CotizacionDolar from '../../Componentes/CotizacionDolar';
import { getProps } from '../../Redux/Actions';
import BarraLateral from '../../Componentes/BarraLateral';
import WhatsAppButton from '../../Componentes/BotonWhastApp';
import Filtros from '../../Componentes/Filtros';

function Home() {

    const loadding = useSelector(state => state.loading);
    const allProps = useSelector(state => state.propiedades);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getProps());
    }, [dispatch]);

    return (
        <div className='cont-gral-Home'>
            {
                loadding ?
                (
                    <Loading/>
                    ) : (
                        <div className='cont-home'>
                            {/* landing */}
                            <LandingPage />
                            <h1 className='titulo-home'>Tenemos la propiedad que estás buscando</h1>
                            {/* contenedor filtros y lista props */}
                            <div className='cont-filtros-listaP'>
                                {/* filtros */}
                                <div className='cont-barraL'>
                                    <BarraLateral muestraVentaAlq={true}/>
                                </div>
                                {/* filtros PCH */}
                                <div className='filtros'>                                    
                                    <Filtros muestraVentaAlq={true}/>
                                </div>                               

                                {/* lista props */}
                                <div className='cont-lista-Props'>                                    
                                    <ListaPropiedades allProps={allProps} id='listaProps'/>
                                </div>
                            </div>

                            {/* cotizaciones */}
                            <CotizacionDolar />
                            {/* boton whatsApp */}
                            <WhatsAppButton/>
                        </div>
                    )
            }
        </div>
    )
}

export default Home