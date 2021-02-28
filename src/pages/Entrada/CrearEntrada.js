import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import InputText from '../../components/InputText';
import Select from '../../components/Select';
import Datepicker from '../../components/Datepicker';
import TextArea from '../../components/TextArea';

function CrearEntrada(props) {

    const { 
        fecha,
        valor,
        guia,
        proveedor,
        ordenCompra,
        documento,
        nota,
        activos,
        consumibles,
        proveedores,
        ordenesCompra,
        onChange,
        onSubmit
    } = props;

    return (
        <Container>
            <br/>
            <Card style={{ width: '100%' }}>
              <Card.Body>
                <Card.Title>
                    <h4>Registrar Entrada</h4>
                </Card.Title>
                <br/>
                <Form onSubmit={onSubmit}>
                    <Row>
                        <Col>
                            <Datepicker
                                name="fecha"
                                label="Fecha"
                                value={fecha}
                                info="Por favor indique la fecha."
                                onChange={onChange}
                            />
                            <Select 
                                name="proveedor"
                                label="Proveedor"
                                value={proveedor}
                                info="Por favor seleccione el proveedor."
                                onChange={onChange}
                                options={proveedores}
                            />
                        </Col>
                        <Col>
                            <InputText
                                name="valor"
                                placeholder="Valor"
                                value={valor}
                                info="Por favor ingrese el valor de la guía."
                                onChange={onChange}
                            />
                            <Select 
                                name="ordenCompra"
                                label="Orden de Compra"
                                value={ordenCompra}
                                info="Por favor seleccione la orden de compra."
                                onChange={onChange}
                                options={ordenesCompra}
                            />
                        </Col>
                        <Col>
                            <InputText
                                name="guia"
                                placeholder="N° Guía"
                                value={guia}
                                info="Por favor ingrese el número de la guía."
                                onChange={onChange}
                            />
                            <InputText
                                name="documento"
                                placeholder="Archivo"
                                value={documento}
                                info="Por favor ingrese el número de la guía."
                                onChange={onChange}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TextArea
                                name="nota"
                                label="Nota"
                                value={nota}
                                info="Aquí puede escribir una nota."
                                onChange={onChange}
                                rows="2"
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

export default CrearEntrada;