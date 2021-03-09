import { useState } from 'react';
import CrearProveedor from './CrearProveedor';
import { useParams } from "react-router-dom";

function CrearProveedorContainer(props) {
    const { id } = useParams();
    console.log(id);
    const [ form, setForm ] = useState({
        nombre: '',
        correo: '',
        telefono: '',
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

    return <CrearProveedor 
            {...form}
            onChange={handelOnChange} 
            onSubmit={handelOnSubmit} 
        />

}

export default CrearProveedorContainer;