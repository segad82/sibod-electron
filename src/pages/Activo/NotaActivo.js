import { Container, Row, Col, Card, Button, Form, Table } from 'react-bootstrap';
import TextArea from '../../components/TextArea';

function CrearActivo(props) {

    const { 
        nota,
        notas,
        onChange,
        onSubmit
    } = props;

    const rows = notas.map(obj => {
        return (
            <tr key={obj.id}>
                <td className="font-italic">
                    <small>
                        {obj.fecha}
                    </small>
                </td>
                <td className="font-italic">
                    <small>
                        {obj.nota}
                    </small>
                </td>
            </tr>
        );
    });

    return (
        <Container>
            <br/>
            <Card style={{ width: '100%' }}>
              <Card.Body>
                <Card.Title>
                    <h4>Notas del Activo</h4>
                </Card.Title>
                <br/>
                <Form onSubmit={onSubmit}>
                    <Row>
                        <Col>
                            <TextArea
                                name="nota"
                                label="Nota"
                                value={nota}
                                info="Aquí puede escribir una nota al actívo."
                                onChange={onChange}
                                rows="3"
                            />
                            <Table striped bordered hover size="sm" style={{ tableLayout: 'fixed', wordWrap: 'break-word' }}>
                              <thead>
                                <tr>
                                  <th style={{ width: '17%' }}>Fecha</th>
                                  <th>Nota</th>
                                </tr>
                              </thead>
                              <tbody>
                                  {rows}
                              </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <Button type="submit" variant="outline-dark" size="lg" block>Agregar</Button>
                        </Col>
                    </Row>
                </Form>
              </Card.Body>
            </Card>
        </Container>
    );

}

export default CrearActivo;