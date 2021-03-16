import React, { useContext } from 'react';
import { RecetasContext } from '../context/RecetasContext';
import Receta from './Receta';
const ListaRecetas = () => {

    const {recetas} = useContext(RecetasContext);
    
    return (
        <div className="row mt-5">
            {recetas.map((receta,key)=>(
                <Receta receta={receta} key={key}/>
            ))}
        </div>
    );
}
 
export default ListaRecetas;