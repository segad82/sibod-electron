import { Form } from 'react-bootstrap';

function InputText(props) {
    const { name, placeholder, value, info, onChange, disabled } = props;
    return (
        <Form.Group controlId={name}>
            <Form.Control
              size="lg" 
              type="text" 
              name={name}
              value={value}
              placeholder={placeholder}
              onChange={onChange} 
              disabled={disabled}
              aria-describedby={name + 'Help'}
            />
            {info ? <Form.Text id={name + 'Help'} muted>{info}</Form.Text> : null}
        </Form.Group>
    );
}

export default InputText;