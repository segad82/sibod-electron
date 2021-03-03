import { Form, Spinner } from 'react-bootstrap';
import { Typeahead, ClearButton } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

function Autocomplete(props) {

    const { name, placeholder, labelKey, info, onChange, size, disabled, options, selected } = props;

    return (
        <Form.Group controlId={name}>
        <Typeahead
          id={name}
          labelKey={labelKey}
          options={options}
          placeholder={placeholder}
          disabled={disabled}
          size={size}
          selected={selected}
          emptyLabel={`${name} no encontrado`}
          onChange={(val) => onChange({ target : { name, value: val[0] ? val[0] : '' }})}>
          {({ onClear, selected }) => (
            <div className="rbt-aux">
              {!!selected.length && <ClearButton onClick={onClear} />}
              {!selected.length && !disabled && <Spinner animation="grow" size="sm" />}
            </div>
          )}
        </Typeahead>
        {info ? <Form.Text id={name + 'Help'} muted>{info}</Form.Text> : null}
    </Form.Group>
    );
}

export default Autocomplete;