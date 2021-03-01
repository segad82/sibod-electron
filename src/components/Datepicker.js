import { Form, InputGroup } from 'react-bootstrap';

function Datepicker(props) {
   const { name, label, value, info, onChange, disabled, size } = props;
    return (
      <Form.Group controlId={name}>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>{label}</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            size={size}
            type="date" 
            name={name}
            value={value}
            onChange={onChange} 
            disabled={disabled}
            aria-describedby={name + 'Help'}
            size={size}
          />
        </InputGroup>
        {info ? <Form.Text id={name + 'Help'} muted>{info}</Form.Text> : null}
      </Form.Group>
    );
}

export default Datepicker;