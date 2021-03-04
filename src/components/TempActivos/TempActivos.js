import { Table } from 'react-bootstrap';
import { Fragment } from 'react';
import Autocomplete from '../../components/Autocomplete';
import InputText from '../../components/InputText';

function TempActivos(props) {

    const {
      onDelete,
      searchList,
      activos,
      activo,
      onChangeActivo,
      onChangeRow
    } = props;

    let filas = activos.map((obj, index) => {
      return (
        <tr key={index}>
        <td>{obj.id}</td>
        <td>{obj.name}</td>
        <td>
          <InputText
              name="serie"
              placeholder="..."
              value={obj.serie}
              onChange={(e) => onChangeRow(e, index, obj)}
          />
        </td>
        <td>
          <a id={index} className={obj.id} href="#" className="btn" onClick={onDelete}>Del</a>
        </td>
      </tr>
      );
    });

    return (
      <Fragment>
        <Autocomplete
          name="activo"
          placeholder="Activo..."
          selected={activo}
          options={searchList}
          labelKey="name"
          onChange={onChangeActivo}
        />
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Serie</th>
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