import { Row, Col, Table } from 'react-bootstrap';

function TempActivos(props) {

    const {} = props;

    return (
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Activo</th>
              <th>Código</th>
              <th>Serie</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
    );

}

export default TempActivos;