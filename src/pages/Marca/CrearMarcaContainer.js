import { useState } from 'react';
import CrearMarca from './CrearMarca';

function CrearMarcaContainer(props) {
    
    const [ form, setForm ] = useState({
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

    return <CrearMarca 
            {...form}
            onChange={handelOnChange} 
            onSubmit={handelOnSubmit} 
        />

}

export default CrearMarcaContainer;