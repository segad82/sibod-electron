import { useState } from 'react';
import CrearArea from './CrearArea';

function CrearAreaContainer(props) {

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

    return <CrearArea 
            {...form}
            onChange={handelOnChange} 
            onSubmit={handelOnSubmit} 
        />
        
}

export default CrearAreaContainer;