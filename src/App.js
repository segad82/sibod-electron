import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Inicio from './pages/Inicio';
import CrearOrdenCompra from './pages/OrdenCompra/CrearOrdenCompraContainer';
import CrearProveedor from './pages/Proveedor/CrearProveedorContainer';
import CrearTurno from './pages/Turno/CrearTurnoContainer';
import CrearArea from './pages/Area/CrearAreaContainer';
import CrearCategoria from './pages/Categoria/CrearCategoriaContainer';
import CrearMarca from './pages/Marca/CrearMarcaContainer';
import CrearTipoElemento from './pages/TipoElemento/CrearTipoElementoContainer';
import CrearModelos from './pages/Modelo/CrearModeloContainer';
import CrearConsumible from './pages/Consumible/CrearConsumibleContainer';
import CrearActivo from './pages/Activo/CrearActivoContainer';
import CrearTrabajador from './pages/Trabajador/CrearTrabajadorContainer';
import CrearEntrada from './pages/Entrada/CrearEntradaContainer';
import ConsultarProveedores from './pages/Proveedor/ConsultarProveedoresContainer';
import ConsultarOrdenesCompra from './pages/OrdenCompra/ConsultarOrdenesCompraContainer';
import ConsultarTurnos from './pages/Turno/ConsultarTurnosContainer';
import ConsultarAreas from './pages/Area/ConsultarAreasContainer';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Inicio}/>
                <Route exact path="/orden_compra" component={CrearOrdenCompra}/>
                <Route exact path="/orden_compra/:id" component={CrearOrdenCompra}/>
                <Route exact path="/proveedor" component={CrearProveedor}/>
                <Route exact path="/proveedor/:id" component={CrearProveedor}/>
                <Route exact path="/turno" component={CrearTurno}/>
                <Route exact path="/turno/:id" component={CrearTurno}/>
                <Route exact path="/area" component={CrearArea}/>
                <Route exact path="/area/:id" component={CrearArea}/>
                <Route exact path="/categorias" component={CrearCategoria}/>
                <Route exact path="/marcas" component={CrearMarca}/>
                <Route exact path="/tipos" component={CrearTipoElemento}/>
                <Route exact path="/modelos" component={CrearModelos}/>
                <Route exact path="/consumibles" component={CrearConsumible}/>
                <Route exact path="/activos" component={CrearActivo}/>
                <Route exact path="/trabajadores" component={CrearTrabajador}/>
                <Route exact path="/entradas" component={CrearEntrada}/>
                <Route exact path="/proveedores" component={ConsultarProveedores}/>
                <Route exact path="/ordenes_compra" component={ConsultarOrdenesCompra}/>
                <Route exact path="/turnos" component={ConsultarTurnos}/>
                <Route exact path="/areas" component={ConsultarAreas}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;