import { Container, Row, Col } from 'react-bootstrap';
import Menu from '../components/Menu';

function Inicio(props) {
    let bodega = [
        { name: 'Entradas', url: '/entradas' },
        { name: 'Entregas', url: '/entregas' }
    ];
    let inventario = [
        { name: 'Activos', url: '/activos' },
        { name: 'Consumibles', url: '/consumibles' },
        { name: 'Categorías', url: '/categorias' },
        { name: 'Tipos de Elementos', url: '/tipos' },
        { name: 'Marcas', url: '/marcas' },
        { name: 'Modelos de Activos', url: '/modelos' }
    ];
    let administracion = [
        { name: 'Trabajadores', url: '/trabajadores' },
        { name: 'Áreas', url: '/areas' },
        { name: 'Turnos', url: '/turnos' },
        { name: 'Proveedores', url: '/proveedores' },
        { name: 'Ordenes de Compra', url: '/ordenes_compra' }
    ];
    return (
        <Container>
            <br/>
            <Row>
                <Col>
                    <Menu name="Bodega" options={bodega} />
                </Col>
                <Col>
                    <Menu name="Inventario" options={inventario} />
                </Col>
                <Col>
                    <Menu name="Administración" options={administracion} />
                </Col>
            </Row>
        </Container>
    );
}

export default Inicio;