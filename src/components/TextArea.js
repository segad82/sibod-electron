import { Form } from 'react-bootstrap';

function TextArea(props) {

    const { name, label, rows, value, info, onChange, disabled } = props;

    return (
        <Form.Group controlId={name}>
            <Form.Label>{label}</Form.Label>
            <Form.Control 
                name={name} 
                size="sm" 
                as="textarea" 
                rows={rows} 
                value={value}
                aria-describedby={name + 'Help'}
                onChange={onChange} 
                disabled={disabled}
            />
          {info ? <Form.Text id={name + 'Help'} muted>{info}</Form.Text> : null}
        </Form.Group>
    );

}

export default TextArea;