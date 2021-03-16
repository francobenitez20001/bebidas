import React, { useContext } from 'react';
import ModalContainer from './modal';
import { RecetasContext } from '../context/RecetasContext';

const DetalleReceta = () => {
    const {receta,loading} = useContext(RecetasContext);
    console.log(receta);
    return (
        (receta)?<ModalContainer>
            {(loading)?'Cargando...':
            <>
                <h2>{receta.strDrink}</h2>
                <h3 className="mt-4">Instrucciones</h3>
                <p>{receta.strInstructions}</p>

                <img className="my-4 img-fuid" src={receta.strDrinkThumb} alt={receta.strDrink}/>
            </>
            }
        </ModalContainer>:null
    );
}
 
export default DetalleReceta;