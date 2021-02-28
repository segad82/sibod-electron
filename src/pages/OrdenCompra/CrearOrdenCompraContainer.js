import { useState } from 'react';
import CrearOrdenCompra from './CrearOrdenCompra';

function CrearOrdenCompraContainer(props) {
    
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

    return <CrearOrdenCompra 
            {...form}
            onChange={handelOnChange} 
            onSubmit={handelOnSubmit} 
        />

}

export default CrearOrdenCompraContainer;