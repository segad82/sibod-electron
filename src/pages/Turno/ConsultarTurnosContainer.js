import { useState } from 'react';
import ConsultarTurnos from './ConsultarTurnos';
import GridCellButton from '../../components/GridCellButton';

function ConsultarTurnosContainer(props) {
    
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    const [rowData, setRowData] = useState([
        { id: 1, nombre: "Turno A", estado: true }
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

    return <ConsultarTurnos 
                onGridReady={onGridReady}
                rowData={rowData}
                onBtnExport={onBtnExport}
                frameworkComponents={frameworkComponents}
            />

}

export default ConsultarTurnosContainer;