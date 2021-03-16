import React,{useContext, useState} from 'react';
import {CategoriasContext}  from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';

const Formulario = () => {
    const {categorias} = useContext(CategoriasContext);
    const {setBusquedaForm,setConsultar} = useContext(RecetasContext);

    const [busqueda, setBusqueda] = useState({
        nombre:'',
        categoria:''
    });

    const handleChange = event=>{
        return setBusqueda({
            ...busqueda,
            [event.target.name]:event.target.value
        })
    };

    const handleSubmit = event=>{
        event.preventDefault();
        setConsultar(true);
        setBusquedaForm(busqueda);
    }

    return (
        <form className="col-12" onSubmit={handleSubmit}>
            <fieldset className="text-center">
                <legend>Buscá bebidas por categoría o ingrediente</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Busca por ingregiente"
                        onChange={handleChange}
                        value={busqueda.nombre}/>
                </div>
                <div className="col-md-4">
                    <select
                        name="categoria"
                        className="form-control"
                        onChange={handleChange}
                        defaultValue={busqueda.categoria}
                        >
                        <option value="">-- Seleccione categoria --</option>
                        {categorias.map((cat,key)=>(
                            <option key={key} value={cat.strCategory}>{cat.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Bebidas"/>
                </div>
            </div>
        </form>
    );
}
 
export default Formulario;