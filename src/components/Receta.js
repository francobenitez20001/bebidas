import React, { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';
import { RecetasContext } from '../context/RecetasContext';

const Receta = ({receta}) => {
    const {setIdReceta} = useContext(RecetasContext);
    const {setModalIsOpen} = useContext(ModalContext);

    const handleClick = id=>{
        setIdReceta(id);
        setModalIsOpen(true);
    }
    return (
       <div className="col-md-4 mb-3">
           <div className="card">
               <h2 className="card-header">{receta.strDrink}</h2>
               <img src={receta.strDrinkThumb} alt={receta.strDrink} className="card-img-top"/>
               <div className="card-body">
                    <button className="btn btn-block btn-primary" type="button" onClick={()=>handleClick(receta.idDrink)}>Ver receta</button>
               </div>
           </div>
       </div>
    );
}
 
export default Receta;