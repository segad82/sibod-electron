import { Link } from 'react-router-dom';
import { Fragment } from 'react';

function NotFound() {
    return (
        <Fragment>
            <h2>Página no existe</h2>
            <Link to="/" className="btn btn-outline-dark btn-lg">Regresar</Link>
        </Fragment>
    );
}

export default NotFound;