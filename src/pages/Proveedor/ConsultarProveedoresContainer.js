import { useState } from 'react';
import ConsultarProveedores from './ConsultarProveedores';
import GridCellButton from '../../components/GridCellButton';

function ConsultarProveedoresContainer(props) {
    
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    const [rowData, setRowData] = useState([
        { id: 1, nombre: "Fining", correo: 'a@a.a', telefono: '+5698554796', estado: true }
    ]);

    const onBtnExport = () => {
        gridApi.exportDataAsCsv();
    };

    const onGridReady = params => {
        params.api.sizeColumnsToFit();
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
    }

    const frameworkComponents = {
        gridCellButton: GridCellButton
    };

    return <ConsultarProveedores 
                onGridReady={onGridReady}
                rowData={rowData}
                onBtnExport={onBtnExport}
                frameworkComponents={frameworkComponents}
            />

}

export default ConsultarProveedoresContainer;