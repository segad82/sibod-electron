import { useState } from 'react';
import TempConsumibles from './TempConsumibles';

function TempConsumiblesContainer(props) {

    const { consumibles, onChangeConsumibles, searchList } = props;

    const [ consumible, setConsumible ] = useState([]);

    function handelOnChangeConsumible(e) {
        const {value} = e.target;
        value['cantidad'] = '';
        setConsumible([value]);
        if(value) {
            onChangeConsumibles([value, ...consumibles]);
            setConsumible([]);
        }
    }

    function handelOnChangeRow(e, i, obj) {
        const { name, value } = e.target;
        obj[name] = value;
        consumibles.splice(i, 1, obj);
        setConsumible([]);
    }

    function handelOnDelete(e) {
        const { id } = e.target;
        consumibles.splice(id, 1);
    }

    return <TempConsumibles 
            onDelete={handelOnDelete}
            searchList={searchList}
            consumibles={consumibles}
            consumible={consumible}
            onChangeConsumible={handelOnChangeConsumible}
            onChangeRow={handelOnChangeRow}
        />

}

export default TempConsumiblesContainer;