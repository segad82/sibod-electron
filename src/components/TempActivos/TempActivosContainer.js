import { useState } from 'react';
import TempActivos from './TempActivos';

function TempActivosContainer(props) {

    const searchList = [
        { id: 1, name: 'Test1' },
        { id: 2, name: 'Test2' },
        { id: 3, name: 'Test3' },
        { id: 4, name: 'Test4' },
        { id: 5, name: 'Test5' }
    ];

    const [ activos, setActivos ] = useState([]);
    const [ activo, setActivo ] = useState([]);

    function handelOnChangeActivo(e) {
        const {value} = e.target;
        setActivo([value]);
    }

    function handelOnAdd(e) {
        let temp = activos;
        temp.push(activo[0]);
        setActivos(temp);
        setActivo([]);
    }

    function handelOnDelete(e) {
        const { id } = e.target;
        document.getElementById(`row_${id}`).remove();
    }

    return <TempActivos 
            onAdd={handelOnAdd}
            onDelete={handelOnDelete}
            searchList={searchList}
            activos={activos}
            activo={activo}
            onChangeActivo={handelOnChangeActivo}
        />

}

export default TempActivosContainer;