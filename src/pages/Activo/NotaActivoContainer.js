import { useState } from 'react';
import NotaActivo from './NotaActivo.js';

function NotaActivoContainer(props) {

    const { activo } = props;
    const [ nota, setNota ] = useState('');

    function handelOnChange(e) {
        let { value } = e.target;
        setNota(value);
    }

    function handelOnSubmit(e){
        e.preventDefault();
        
        console.log({a: activo, b: nota});
    }

    const notas = [
        { id: 1, nota: 'El elemento fue reparado.', fecha: '06-02-2021' },
        { id: 2, nota: 'El elemento sufrió daños.', fecha: '01-02-2021' }
    ];

    return <NotaActivo 
            nota={nota}
            notas={notas}
            onChange={handelOnChange} 
            onSubmit={handelOnSubmit} 
        />
        
}

export default NotaActivoContainer;