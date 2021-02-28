import { useState } from 'react';
import CrearTipoElemento from './CrearTipoElemento';

function CrearTipoElementoContainer(props) {

    const [ form, setForm ] = useState({
        categoria: 0,
        clase: 0,
        nombre: '',
        estado: true,
    });

    function handelOnChange(e) {
        let { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value 
        });
    }

    function handelOnSubmit(e){
        e.preventDefault();
        //validar formulario antes de llamar la función del padre
        console.log(form);
    }

    const categorias = [];
    const clases = [];

    return <CrearTipoElemento 
            {...form}
            categorias={categorias}
            clases={clases}
            onChange={handelOnChange} 
            onSubmit={handelOnSubmit} 
        />

}

export default CrearTipoElementoContainer;