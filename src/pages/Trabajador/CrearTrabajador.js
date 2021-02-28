import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import InputText from '../../components/InputText';
import Datepicker from '../../components/Datepicker';
import Select from '../../components/Select';
import Checkbox from '../../components/Checkbox';

function CrearTrabajador(props) {
    const { 
        rut,
        nombre,
        area,
        turno,
        estado,
        fechaNacimiento,
        tallaCamisa,
        tallaPantalon,
        tallaCalzado,
        areas,
        turnos,
        tallasCamisa,
        tallasPantalon,
        tallasCalzado,
        onChange,
        onSubmit
    } = props;
    return (
        <Container>
            <br/>
            <Card style={{ width: '100%' }}>
              <Card.Body>
                <Card.Title>
                    <h4>Registrar Trabajador</h4>
                </Card.Title>
                <br/>
                <Form onSubmit={onSubmit}>
                    <Row>
                        <Col>
                            <Select 
                                name="area"
                                label="Área"
                                placeholder="Área"
                                value={area}
                                info="Por seleccione el área."
                                onChange={onChange}
                                options={areas}
                            />
                            <Select 
                                name="turno"
                                label="Turno"
                                placeholder="Turno"
                                value={turno}
                                info="Por seleccione el turno."
                                onChange={onChange}
                                options={turnos}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <InputText
                                name="rut"
                                placeholder="RUT"
                                value={rut}
                                info="Por favor ingrese el rut."
                                onChange={onChange}
                            />
                            <InputText
                                name="nombre"
                                placeholder="Nombre"
                                value={nombre}
                                info="Por favor ingrese el nombre."
                                onChange={onChange}
                            />
                            <Datepicker
                                name="fechaNacimiento"
                                label="Fecha de Nacimiento"
                                value={fechaNacimiento}
                                info="Por favor ingrese la fecha de nacimiento."
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
                                name="tallaCamisa"
                                label="Talla de Camisa"
                                placeholder="Talla de Camisa"
                                value={tallaCamisa}
                                info="Por seleccione la talla de camisa."
                                onChange={onChange}
                                options={tallasCamisa}
                            />
                            <Select 
                                name="tallaPantalon"
                                label="Talla de Pantalón"
                                placeholder="Talla de Pantalón"
                                value={tallaPantalon}
                                info="Por seleccione la talla de pantalón."
                                onChange={onChange}
                                options={tallasPantalon}
                            />
                            <Select 
                                name="tallaCalzado"
                                label="Talla de Calzado"
                                placeholder="Talla de Calzado"
                                value={tallaCalzado}
                                info="Por seleccione la talla de calzado."
                                onChange={onChange}
                                options={tallasCalzado}
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

export default CrearTrabajador;