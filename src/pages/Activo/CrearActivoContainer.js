import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import CrearActivo from './CrearActivo';
import NotaActivo from './NotaActivoContainer';

function CrearActivoContainer(props) {

    const [ form, setForm ] = useState({
        codigo: '',
        categoria: '',
        tipo: '',
        marca: '',
        modelo: 0,
        serie: '',
        estado: true,
    });

    function handelOnChange(e) {
        let { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value 
        });
    }

    function handelOnSubmit(e){
        e.preventDefault();
        //validar formulario antes de llamar la función del padre
        console.log(form);
    }

    const modelos = [];

    return (
        <Container>
            <Row>
                <Col>
                    <CrearActivo 
                        {...form}
                        modelos={modelos}
                        onChange={handelOnChange} 
                        onSubmit={handelOnSubmit}
                    />
                </Col>
                <Col>
                    <NotaActivo activo={form.codigo} />
                </Col>
            </Row>
        </Container>
    );
        
}

export default CrearActivoContainer;