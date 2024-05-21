import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles.css';
import ListaPropiedades from '../../Componentes/ListaPropiedades';
import LandingPage from '../../Componentes/LandingPage';
import Loading from '../../Componentes/Loading';
import CotizacionDolar from '../../Componentes/CotizacionDolar';
import { getProps } from '../../Redux/Actions';

function Home() {

    const loadding = useSelector(state => state.loading);
    const allProps = useSelector(state => state.propiedades);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getProps());
    }, [dispatch]);

    return (
        <div className='contHome'>
            {
                loadding ?
                (
                    <Loading/>
                    ) : (
                        <div className='cont-home'>
                            {/* landing */}
                            <LandingPage />
                            {/* lista props */}
                            <ListaPropiedades allProps={allProps} />
                            {/* cotizaciones */}
                            <CotizacionDolar />
                        </div>
                    )
            }
        </div>
    )
}

export default Home