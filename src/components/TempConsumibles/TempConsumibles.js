import { Table } from 'react-bootstrap';
import { Fragment } from 'react';
import Autocomplete from '../../components/Autocomplete';
import InputText from '../../components/InputText';

function TempConsumibles(props) {

  const {
    onDelete,
    searchList,
    consumibles,
    consumible,
    onChangeConsumible,
    onChangeRow
  } = props;

  let filas = consumibles.map((obj, index) => {
    return (
      <tr key={index}>
        <td>{obj.id}</td>
        <td>{obj.name}</td>
        <td>
          <InputText
              name="cantidad"
              placeholder="0"
              value={obj.cantidad}
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
        name="consumible"
        placeholder="Consumible..."
        selected={consumible}
        options={searchList}
        labelKey="name"
        onChange={onChangeConsumible}
      />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Cantidad</th>
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

export default TempConsumibles;