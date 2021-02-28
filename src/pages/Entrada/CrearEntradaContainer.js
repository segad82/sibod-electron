import { useState } from 'react';
import CrearEntrada from './CrearEntrada';

function CrearEntradaContainer() {

    const [ form, setForm ] = useState({
        fecha: new Date().toJSON().slice(0,10).replace(/-/g,'-'),
        valor: 0,
        guia: '',
        proveedor: '',
        ordenCompra: 0,
        documento: '',
        nota: '',
        activos: [],
        consumibles: []
    });

    function handelOnChange(e) {
        let { name, value } = e.target;
        setForm({
            ...form,
            [name]: value 
        });
    }

    function handelOnSubmit(e){
        e.preventDefault();
        
        console.log(form);
    }

    const proveedores = [];
    const ordenesCompra = [];

    return <CrearEntrada 
            {...form}
            proveedores={proveedores}
            ordenesCompra={ordenesCompra}
            onChange={handelOnChange} 
            onSubmit={handelOnSubmit}
        />

}

export default CrearEntradaContainer;