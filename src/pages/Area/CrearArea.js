import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import InputText from '../../components/InputText';
import Checkbox from '../../components/Checkbox';

function CrearArea(props) {

    const { 
        nombre,
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
                    <h4>Registrar Área</h4>
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

export default CrearArea;