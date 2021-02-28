import { Link } from 'react-router-dom';
import { Button as Btn } from 'react-bootstrap';

function Button(props) {
    return (
          <Link to={props.path}>
            <Btn variant="outline-dark" size="lg" block>{props.text}</Btn>
          </Link>
    );
}

export default Button;