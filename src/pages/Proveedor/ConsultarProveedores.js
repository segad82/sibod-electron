import { Container, Card } from 'react-bootstrap';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function ConsultarProveedores(props) {

    const { onGridReady, rowData, onBtnExport, frameworkComponents } = props;
    console.log(props);
    return (
        <Container>
            <br/>
            <Card style={{ width: '100%' }}>
              <Card.Body>
                <Card.Title>
                    <h4>Proveedores</h4>
                </Card.Title>
                <br/>
                <div className="ag-theme-alpine" style={{ height: 300 }}>
                    <AgGridReact
                        onGridReady={onGridReady}
                        rowData={rowData}
                        frameworkComponents={frameworkComponents}>
                        <AgGridColumn field="id" sortable={ true } resizable={true}></AgGridColumn>
                        <AgGridColumn field="nombre" sortable={ true } filter={ true }></AgGridColumn>
                        <AgGridColumn field="correo"></AgGridColumn>
                        <AgGridColumn field="telefono"></AgGridColumn>
                        <AgGridColumn field="estado" sortable={ true }></AgGridColumn>
                        <AgGridColumn cellRenderer="gridCellButton" cellRendererParams={{ path: 'proveedor', text: 'Editar' }}></AgGridColumn>
                    </AgGridReact>
                </div>
                <button onClick={() => onBtnExport()}>
                  Download file
                </button>
              </Card.Body>
            </Card>
        </Container>
    );

}

export default ConsultarProveedores;