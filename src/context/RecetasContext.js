import React, { createContext, useEffect, useState } from 'react';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
    const [busquedaForm, setBusquedaForm] = useState({
        nombre:'',
        categoria:''
    });
    const [recetas, setRecetas] = useState([]);
    const [idReceta, setIdReceta] = useState(null);
    const [receta, setReceta] = useState(null);
    const [consultar, setConsultar] = useState(false);

    //estados de la peticion
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const obtenerRecetas = async ()=>{
            setLoading(true);
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${busquedaForm.nombre}&c=${busquedaForm.categoria}`;
            const reqRecetas = await fetch(url);
            if(reqRecetas.status !== 200) return setError('Error en la petición')
            const {drinks} = await reqRecetas.json();
            setRecetas(drinks);
            setLoading(false);
        }
        if(consultar){
            obtenerRecetas();
        }
    }, [busquedaForm])
    
    useEffect(() => {
        const obtenerReceta = async ()=>{
            setLoading(true);
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
            const reqReceta = await fetch(url);
            if(reqReceta.status !== 200) return setError('Error en la petición')
            const {drinks:receta} = await reqReceta.json();
            setReceta(receta[0]);
            setLoading(false);
        }
        if(idReceta){
            obtenerReceta();
        }
    }, [idReceta])

    return ( 
        <RecetasContext.Provider value={{loading,error,recetas,receta,setBusquedaForm,setIdReceta,setConsultar}}>
            {props.children}
        </RecetasContext.Provider>
    );
}
 
export default RecetasProvider;