import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function ConsultarAreas(props) {

    const { onGridReady, rowData, onBtnExport, frameworkComponents } = props;
    return (
        <Container>
            <br/>
            <Card style={{ width: '100%' }}>
              <Card.Body>
                <Card.Title>
                    <h4>Áreas</h4>
                </Card.Title>
                <Row>
                    <Col xs={6}></Col>
                    <Col>
                        <Button variant="outline-dark" onClick={() => onBtnExport()} block>Exportar</Button>
                    </Col>
                    <Col>
                        <Button href="/area" variant="outline-dark" block>Crear</Button>
                    </Col>
                    <Col>
                        <Button href="/" variant="outline-dark" block>Salir</Button>
                    </Col>
                </Row>
                <br/>
                <div className="ag-theme-alpine" style={{ height: 300 }}>
                    <AgGridReact
                        onGridReady={onGridReady}
                        rowData={rowData}
                        frameworkComponents={frameworkComponents}>
                        <AgGridColumn field="id" sortable={ true } resizable={true}></AgGridColumn>
                        <AgGridColumn field="nombre" sortable={ true } filter={ true }></AgGridColumn>
                        <AgGridColumn field="estado" sortable={ true }></AgGridColumn>
                        <AgGridColumn cellRenderer="gridCellButton" cellRendererParams={{ path: 'area', text: 'Editar' }}></AgGridColumn>
                    </AgGridReact>
                </div>
              </Card.Body>
            </Card>
        </Container>
    );

}

export default ConsultarAreas;