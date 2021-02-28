import { useState } from 'react';
import CrearConsumible from './CrearConsumible';

function CrearConsumibleContainer(props) {

    const [ form, setForm ] = useState({
        categoria: '',
        marca: 0,
        tipo: 0,
        nombre: '',
        cantidadMinima: 0,
        cantidadActual: 0,
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

    const tipos = [];
    const marcas = [];

    return <CrearConsumible 
            {...form}
            tipos={tipos}
            marcas={marcas}
            onChange={handelOnChange} 
            onSubmit={handelOnSubmit} 
        />
        
}

export default CrearConsumibleContainer;