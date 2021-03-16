import React, { createContext,useEffect,useState } from 'react';

//crear context
export const CategoriasContext = createContext();

//Provider es donde se encuentras las funciones y el state.
const CategoriasProvider = (props)=>{
    //crear state del context

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const obtenerCategorias = async()=>{
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const reqCategorias = await fetch(url);
            const {drinks} = await reqCategorias.json();
            setCategorias(drinks)
        }
        obtenerCategorias();
    }, [])

    return (
        <CategoriasContext.Provider
            value={{categorias}}>
            {props.children}
        </CategoriasContext.Provider>
    );
}

export default CategoriasProvider;