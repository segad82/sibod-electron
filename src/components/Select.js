import { Form, InputGroup } from 'react-bootstrap';

function Select(props) {
  const { name, label, value, info, onChange, options, size } = props;
  let optionsList = [];
  if(options && options.length > 0)
    optionsList = options.map(opt => <option key={opt.label} value={opt.value}>{opt.label}</option>);
  return (
    <Form.Group controlId={name}>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>{label}</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control 
          as="select" 
          size={size}
          custom 
          value={value} 
          name={name} 
          onChange={onChange}>
          {optionsList}
        </Form.Control>
      </InputGroup>
      {info ? <Form.Text id={name + 'Help'} muted>{info}</Form.Text> : null}
    </Form.Group>
  );
}

export default Select;