import { useState } from 'react';
import ConsultarOrdenesCompra from './ConsultarOrdenesCompra';
import GridCellButton from '../../components/GridCellButton';

function ConsultarOrdenesCompraContainer(props) {
    
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    const [rowData, setRowData] = useState([
        { id: 1, nombre: "Fining", estado: true }
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

    return <ConsultarOrdenesCompra 
                onGridReady={onGridReady}
                rowData={rowData}
                onBtnExport={onBtnExport}
                frameworkComponents={frameworkComponents}
            />

}

export default ConsultarOrdenesCompraContainer;