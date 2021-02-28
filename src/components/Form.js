import React from 'react';
//import Button from '../components/Button';
import { Button as Btn } from 'react-bootstrap';
import InputText from '../components/InputText';
import Select from '../components/Select';
import Datepicker from '../components/Datepicker';
import Checkbox from '../components/Checkbox';

class Form extends React.Component {

    constructor(props) {
        super(props)
        let elements = {};
        props.inputs.map(input => elements[input.name] = input.value);
        this.state = elements;
        this.handelOnChange = this.handelOnChange.bind(this);
        this.handelOnSubmit = this.handelOnSubmit.bind(this);
    }

    handelOnChange(e) {
        let { name, value, type, checked } = e.target;
        this.setState({ [name]: type === 'checkbox' ? checked : value });
    }

    handelOnSubmit(e){
        e.preventDefault();
        //validar formulario antes de llamar la función del padre
        this.props.onAccept(this.state);
    }

    render(){
        let { title, subtitle, inputs, callback } = this.props;
        let elements = [];
        if(inputs && inputs.length > 0) {
            elements = inputs.map(input => {
                switch(input.type){
                    case 'text': 
                        return <InputText 
                            {...input}
                            key={input.name} 
                            value={this.state[input.name]} 
                            onChange={this.handelOnChange} 
                        />;
                    case 'checkbox':
                        return <Checkbox 
                            {...input} 
                            key={input.name} 
                            value={this.state[input.name]} 
                            onChange={this.handelOnChange} 
                        />;
                    case 'select': 
                        return <Select 
                            {...input}
                            key={input.name} 
                            value={this.state[input.name]} 
                            onChange={this.handelOnChange} 
                        />;
                    case 'date':
                        return <Datepicker
                            {...input}
                            key={input.name} 
                            value={this.state[input.name]} 
                            onChange={this.handelOnChange} 
                        />;
                    default: return <p>Tipo de componente no existe</p>
                }
            });
        }
        return(
            <div className="card">
              <h5 className="card-header">{title}</h5>
              <form className="card-body" onSubmit={this.handelOnSubmit}>
                <h6 className="card-title">{subtitle}</h6>
                <br/>
                {elements}
                <br/>
                <Btn type="submit" variant="outline-dark" size="lg" block>Guardar</Btn>
                <Btn href={callback} variant="outline-dark" size="lg" block>Cancelar</Btn>
             </form>
            </div>
        );
    }
//<Button path={callback} text="Cancelar" />
}

export default Form;