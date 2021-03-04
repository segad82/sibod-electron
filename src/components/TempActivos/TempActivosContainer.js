import { useState } from 'react';
import TempActivos from './TempActivos';

function TempActivosContainer(props) {

    const { activos, onChangeActivos, searchList } = props;

    const [ activo, setActivo ] = useState([]);

    function handelOnChangeActivo(e) {
        const {value} = e.target;
        value['serie'] = '';
        setActivo([value]);
        if(value) {
            onChangeActivos([value, ...activos]);
            setActivo([]);
        }
    }

    function handelOnChangeRow(e, i, obj) {
        const { name, value } = e.target;
        obj[name] = value;
        activos.splice(i, 1, obj);
        setActivo([]);
    }

    function handelOnDelete(e) {
        const { id } = e.target;
        activos.splice(id, 1);
    }

    return <TempActivos 
            onDelete={handelOnDelete}
            searchList={searchList}
            activos={activos}
            activo={activo}
            onChangeActivo={handelOnChangeActivo}
            onChangeRow={handelOnChangeRow}
        />

}

export default TempActivosContainer;