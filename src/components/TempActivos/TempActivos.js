import { Table, Row, Col } from 'react-bootstrap';
import { Fragment } from 'react';
import Autocomplete from '../../components/Autocomplete';

function TempActivos(props) {

    const {
      onAdd,
      onDelete,
      searchList,
      activos,
      activo,
      onChangeActivo
    } = props;

    let filas = activos.map((obj, index) => {
      return (
        <tr key={index} id={`row_${obj.id}`}>
          <td>{obj.id}</td>
          <td>{obj.name}</td>
          <td>
            <a id={obj.id} href="#" className="btn" onClick={onDelete}>Del</a>
          </td>
        </tr>
      );
    });

    return (
      <Fragment>
        <Row>
          <Col>
            <Autocomplete
              name="activo"
              placeholder="Activo..."
              selected={activo}
              options={searchList}
              labelKey="name"
              onChange={onChangeActivo}
            />
          </Col>
          <Col>
            <a href="#" className="btn" onClick={onAdd}>Add</a>
          </Col>
        </Row>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filas}
          </tbody>
        </Table>
      </Fragment>
    );

}

export default TempActivos;