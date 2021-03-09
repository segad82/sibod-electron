import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import InputText from '../../components/InputText';
import Checkbox from '../../components/Checkbox';

function CrearProveedor(props) {

    const { 
        nombre,
        correo,
        telefono,
        estado,
        onChange,
        onSubmit
    } = props;

    return (
        <Container>
            <br/>
            <Card style={{ width: '100%' }}>
              <Card.Body>
                <Card.Title>
                    <h4>Registrar Proveedor</h4>
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
                            <InputText
                                name="correo"
                                placeholder="Correo"
                                value={correo}
                                info="Por favor ingrese el correo electrónico."
                                onChange={onChange}
                            />
                            <InputText
                                name="telefono"
                                placeholder="Teléfono"
                                value={telefono}
                                info="Por favor ingrese el número de teléfono."
                                onChange={onChange}
                            />
                            <Checkbox 
                                name="estado"
                                label="Registro disponible"
                                value={estado}
                                onChange={onChange}
                            />
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <Button type="submit" variant="outline-dark" size="lg" block>Guardar</Button>
                        </Col>
                        <Col>
                            <Button href="/proveedores" variant="outline-dark" size="lg" block>Cancelar</Button>
                        </Col>
                    </Row>
                </Form>
              </Card.Body>
            </Card>
        </Container>
    );

}

export default CrearProveedor;