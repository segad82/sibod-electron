import { useState } from 'react';
import ConsultarAreas from './ConsultarAreas';
import GridCellButton from '../../components/GridCellButton';

function ConsultarAreasContainer(props) {
    
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    const [rowData, setRowData] = useState([
        { id: 1, nombre: "Área A", estado: true }
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

    return <ConsultarAreas 
                onGridReady={onGridReady}
                rowData={rowData}
                onBtnExport={onBtnExport}
                frameworkComponents={frameworkComponents}
            />

}

export default ConsultarAreasContainer;