import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import InputText from '../../components/InputText';
import Select from '../../components/Select';
import Checkbox from '../../components/Checkbox';

function CrearActivo(props) {

    const { 
        codigo,
        categoria,
        tipo,
        marca,
        modelo,
        serie,
        estado,
        modelos,
        onChange,
        onSubmit
    } = props;

    return (
        <Container>
            <br/>
            <Card style={{ width: '100%' }}>
              <Card.Body>
                <Card.Title>
                    <h4>Registrar Activo</h4>
                </Card.Title>
                <br/>
                <Form onSubmit={onSubmit}>
                    <Row>
                        <Col>
                            <InputText
                                name="codigo"
                                placeholder="Código"
                                value={codigo}
                                info="Aquí se muestra el código."
                                onChange={onChange}
                                disabled={true}
                            />
                            <Select 
                                name="modelo"
                                label="Modelo"
                                value={modelo}
                                info="Por favor seleccione el modelo."
                                onChange={onChange}
                                options={modelos}
                            />
                            <InputText
                                name="tipo"
                                placeholder="Tipo de Elemento"
                                value={tipo}
                                info="Aquí se muestra el tipo de elemento."
                                onChange={onChange}
                                disabled={true}
                            />
                            <Checkbox 
                                name="estado"
                                label="Registro disponible"
                                value={estado}
                                onChange={onChange}
                            />
                        </Col>
                        <Col>
                            <InputText
                                name="serie"
                                placeholder="Número de Serie"
                                value={serie}
                                info="Por favor ingrese el número de serie."
                                onChange={onChange}
                            />
                            <InputText
                                name="categoria"
                                placeholder="Categoría"
                                value={categoria}
                                info="Aquí se muestra la categoría."
                                onChange={onChange}
                                disabled={true}
                            />
                            <InputText
                                name="marca"
                                placeholder="Marca"
                                value={marca}
                                info="Aquí se muestra la marca."
                                onChange={onChange}
                                disabled={true}
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

export default CrearActivo;