import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import InputText from '../../components/InputText';
import Select from '../../components/Select';
import Checkbox from '../../components/Checkbox';

function CrearTipoElemento(props) {

    const { 
        categoria,
        clase,
        nombre,
        estado,
        categorias,
        clases,
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
                                name="categoria"
                                label="Categorías"
                                placeholder="Categoría"
                                value={categoria}
                                info="Por seleccione la categoría."
                                onChange={onChange}
                                options={categorias}
                            />
                            <Select 
                                name="clase"
                                label="Clase de Elemento"
                                placeholder="Clase de Elemento"
                                value={clase}
                                info="Por seleccione la clase de elemento."
                                onChange={onChange}
                                options={clases}
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

export default CrearTipoElemento;