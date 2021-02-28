import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import InputText from '../../components/InputText';
import Select from '../../components/Select';
import Checkbox from '../../components/Checkbox';

function CrearModelo(props) {

    const { 
        marca,
        tipo,
        nombre,
        estado,
        marcas,
        tipos,
        onChange,
        onSubmit
    } = props;

    return (
        <Container>
            <br/>
            <Card style={{ width: '100%' }}>
              <Card.Body>
                <Card.Title>
                    <h4>Registrar Tipo de Elemento</h4>
                </Card.Title>
                <br/>
                <Form onSubmit={onSubmit}>
                    <Row>
                        <Col>
                            <InputText
                                name="nombre"
                                placeholder="Nombre"
                                value={nombre}
                                info="Por favor ingrese el nombre."
                                onChange={onChange}
                            />
                            <Checkbox 
                                name="estado"
                                label="Registro disponible"
                                value={estado}
                                onChange={onChange}
                            />
                        </Col>
                        <Col>
                            <Select 
                                name="marca"
                                label="Marca"
                                placeholder="Marca"
                                value={marca}
                                info="Por seleccione la marca."
                                onChange={onChange}
                                options={marcas}
                            />
                            <Select 
                                name="tipo"
                                label="Tipo de Elemento"
                                placeholder="Tipo de Elemento"
                                value={tipo}
                                info="Por seleccione el tipo de elemento."
                                onChange={onChange}
                                options={tipos}
                            />
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <Button type="submit" variant="outline-dark" size="lg" block>Guardar</Button>
                        </Col>
                        <Col>
                            <Button href="/" variant="outline-dark" size="lg" block>Cancelar</Button>
                        </Col>
                    </Row>
                </Form>
              </Card.Body>
            </Card>
        </Container>
    );

}

export default CrearModelo;