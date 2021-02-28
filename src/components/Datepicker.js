import { Form, InputGroup } from 'react-bootstrap';

function Datepicker(props) {
   const { name, label, value, info, onChange, disabled } = props;
    return (
      <Form.Group controlId={name}>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>{label}</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            size="lg" 
            type="date" 
            name={name}
            value={value}
            onChange={onChange} 
            disabled={disabled}
            aria-describedby={name + 'Help'}
          />
        </InputGroup>
        {info ? <Form.Text id={name + 'Help'} muted>{info}</Form.Text> : null}
      </Form.Group>
    );
}

export default Datepicker;