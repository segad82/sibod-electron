import { useState } from 'react';
import CrearModelo from './CrearModelo';

function CrearModeloContainer(props) {

    const [ form, setForm ] = useState({
        marca: 0,
        tipo: 0,
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

    const marcas = [];
    const tipos = [];

    return <CrearModelo 
            {...form}
            marcas={marcas}
            tipos={tipos}
            onChange={handelOnChange} 
            onSubmit={handelOnSubmit} 
        />

}

export default CrearModeloContainer;