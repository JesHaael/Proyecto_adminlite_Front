import { Fragment } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Registro from './paginas/auth/registro';
import Login from './paginas/auth/Login';
import MostrarClientes from './paginas/modulos/MostrarClientes';
import AgregarClientes from './paginas/modulos/AgregarClientes';
import EditarClientes from './paginas/modulos/EditarClientes';
import RutasProtegidas from './paginas/auth/RutasProtegidas';
import MostrarProveedores from './paginas/modulos/MostrarProveedores';
import EditarProveedores from './paginas/modulos/EditarProveedores';
import AgregarProveedores from './paginas/modulos/AgregarProveedores';
import MostrarProductos from './paginas/modulos/MostrarProductos';
import EditarProductos from './paginas/modulos/EditarProductos';
import AgregarProductos from './paginas/modulos/AgregarProductos';


// importamos el componente


function App() {

  return (
    <div className="App">
      <Fragment>
    <BrowserRouter>
    <Routes>
    <Route path='/' element= {<Navigate to="/login"/>}/> 
    <Route path='/login' exact element= {<Login/>}/> 
    <Route path='/registro' exact element= {<Registro/>}/>
    <Route path="/home" exact element = {<RutasProtegidas element={<Home/>}/>}/>
    <Route path='/clientes' exact element = { <RutasProtegidas element={<MostrarClientes />}/>}></Route>
    <Route path='/clientes/agregar' exact element = {<RutasProtegidas element= {<AgregarClientes />}/> }></Route>
    <Route path='/clientes/editar/:id' exact element = {<RutasProtegidas element = {<EditarClientes />}/> }></Route>    
    <Route path='/proveedores' exact element = { <RutasProtegidas element={<MostrarProveedores />}/>}></Route>
    <Route path='/proveedores/editar/:id' exact element = {<RutasProtegidas element = {<EditarProveedores />}/> }></Route>
    <Route path='/proveedores/agregar' exact element = {<RutasProtegidas element= {<AgregarProveedores />}/> }></Route>
    <Route path='/productos' exact element = { <RutasProtegidas element={<MostrarProductos />}/>}></Route>
    <Route path='/productos/editar/:id' exact element = {<RutasProtegidas element = {<EditarProductos />}/> }></Route>    
    <Route path='/productos/agregar' exact element = {<RutasProtegidas element= {<AgregarProductos />}/> }></Route>


    </Routes>
    </BrowserRouter>
    </Fragment>
    </div>
  );
}

export default App;
