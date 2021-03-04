import { useState } from 'react';
import CrearEntrada from './CrearEntrada';

function CrearEntradaContainer() {

    const [ form, setForm ] = useState({
        fecha: new Date().toJSON().slice(0,10).replace(/-/g,'-'),
        valor: '',
        guia: '',
        proveedor: '',
        ordenCompra: 0,
        documento: '',
        nota: ''
    });

    const [ activos, setActivos ] = useState([]);
    const [ consumibles, setConsumibles ] = useState([]);

    function handelOnChange(e) {
        let { name, value } = e.target;
        console.log({ name, value });
        setForm({
            ...form,
            [name]: value 
        });
    }

    function handelOnSubmit(e){
        e.preventDefault();
        
        console.log(form);
        console.log(activos);
        console.log(consumibles);
    }

    const proveedores = [];
    const ordenesCompra = [];
    const searchActivos = [
        { id: 1, name: 'Test1' },
        { id: 2, name: 'Test2' },
        { id: 3, name: 'Test3' },
        { id: 4, name: 'Test4' },
        { id: 5, name: 'Test5' }
    ];
    const searchConsumibles = [
        { id: 1, name: 'Test1' },
        { id: 2, name: 'Test2' },
        { id: 3, name: 'Test3' },
        { id: 4, name: 'Test4' },
        { id: 5, name: 'Test5' }
    ];

    return <CrearEntrada 
            {...form}
            proveedores={proveedores}
            ordenesCompra={ordenesCompra}
            onChange={handelOnChange} 
            onSubmit={handelOnSubmit}
            activos={activos}
            onChangeActivos={setActivos}
            searchActivos={searchActivos}
            consumibles={consumibles}
            onChangeConsumibles={setConsumibles}
            searchConsumibles={searchConsumibles}
        />

}

export default CrearEntradaContainer;