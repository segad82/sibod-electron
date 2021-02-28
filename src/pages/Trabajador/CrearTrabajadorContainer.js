import { useState } from 'react';
import CrearTrabajador from './CrearTrabajador';

function CrearTrabajadorContainer() {

    const [ form, setForm ] = useState({
        rut: '',
        nombre: '',
        area: 0,
        turno: 0,
        estado: true,
        fechaNacimiento: '2000-01-01',
        tallaCamisa: 0,
        tallaPantalon: 0,
        tallaCalzado: 0
    });

    const areas = [];
    const turnos = [];
    const tallasCamisa = [ 
        { label: '...', value: 0 },
        { label: 'Talla 1', value: 1 },
        { label: 'Talla 2', value: 2 }
    ];
    const tallasPantalon = [ 
        { label: '...', value: 0 },
        { label: 'Talla 1', value: 1 },
        { label: 'Talla 2', value: 2 }
    ];
    const tallasCalzado = [ 
        { label: '...', value: 0 },
        { label: 'Talla 1', value: 1 },
        { label: 'Talla 2', value: 2 }
    ];

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

    return <CrearTrabajador 
            {...form}
            areas={areas}
            turnos={turnos}
            tallasCamisa={tallasCamisa} 
            tallasPantalon={tallasPantalon}
            tallasCalzado={tallasCalzado}
            onChange={handelOnChange} 
            onSubmit={handelOnSubmit} 
        />

}

export default CrearTrabajadorContainer;