import { Form, Spinner } from 'react-bootstrap';
import { Typeahead, ClearButton } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

function Autocomplete(props) {

    const { name, placeholder, value, info, onChange, size, disabled, options } = props;

    return (
        <Form.Group controlId={name}>
        <Typeahead
          id={name}
          options={options}
          placeholder={placeholder}>
          {({ onClear, selected }) => (
            <div className="rbt-aux">
              {!!selected.length && <ClearButton onClick={onClear} />}
              {!selected.length && <Spinner animation="grow" size="sm" />}
            </div>
          )}
        </Typeahead>
        {info ? <Form.Text id={name + 'Help'} muted>{info}</Form.Text> : null}
    </Form.Group>
    );
}

export default Autocomplete;