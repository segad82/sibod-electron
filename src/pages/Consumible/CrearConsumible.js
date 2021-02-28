import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import InputText from '../../components/InputText';
import Select from '../../components/Select';
import Checkbox from '../../components/Checkbox';

function CrearConsumible(props) {

    const { 
        categoria,
        marca,
        tipo,
        nombre,
        cantidadMinima,
        cantidadActual,
        estado,
        tipos,
        marcas,
        onChange,
        onSubmit
    } = props;

    return (
        <Container>
            <br/>
            <Card style={{ width: '100%' }}>
              <Card.Body>
                <Card.Title>
                    <h4>Registrar Consumible</h4>
                </Card.Title>
                <br/>
                <Form onSubmit={onSubmit}>
                    <Row>
                        <Col>
                            <Select 
                                name="tipo"
                                label="Tipo de Elemento"
                                placeholder="Tipo de Elemento"
                                value={tipo}
                                info="Por seleccione el tipo de elemento."
                                onChange={onChange}
                                options={tipos}
                            />
                            <InputText
                                name="nombre"
                                placeholder="Nombre"
                                value={nombre}
                                info="Por favor ingrese el nombre."
                                onChange={onChange}
                            />
                            <InputText
                                name="cantidadMinima"
                                placeholder="Cantidad Mínima"
                                value={cantidadMinima}
                                info="Por favor ingrese la cantidad mínima."
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
                            <InputText
                                name="categoria"
                                placeholder="Categoría"
                                value={categoria}
                                info="Aquí se mostrará la categoría sobre el tipo de elemento seleccionado."
                                disabled={true}
                            />
                            <Select 
                                name="marca"
                                label="Marca"
                                placeholder="Marca"
                                value={marca}
                                info="Por seleccione la marca."
                                onChange={onChange}
                                options={marcas}
                            />
                            <InputText
                                name="cantidadActual"
                                placeholder="Cantidad Actual"
                                value={cantidadActual}
                                info="Aquí se mostrará la cantidad actual."
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

export default CrearConsumible;