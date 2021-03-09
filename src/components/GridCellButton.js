import { Link } from 'react-router-dom';
import { Button as Btn } from 'react-bootstrap';

function GridCellButton(props) {

    return (
          <Link to={`/${props.path}/${props.data.id}`}>{props.text}</Link>
    );
}

export default GridCellButton;