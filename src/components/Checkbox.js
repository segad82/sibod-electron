import { FormCheck } from 'react-bootstrap';

function Checkbox(props) {
    const { name, label, onChange, value } = props;
    return (
        <FormCheck 
          type="switch"
          id={name} 
          name={name}
          defaultChecked={value}
          onChange={onChange}
          label={label}
        />
    );
}

export default Checkbox;