import React,{useState,useEffect} from "react"
import { Link,useNavigate,useParams } from "react-router-dom";
import ContentHeader from "../../Componentes/ContentHeader";
import Footer from "../../Componentes/Footer";
import Navbar from "../../Componentes/Navbar";
import SidebarContainer from "../../Componentes/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";
//import swal from "sweetalert";
 



const EditarClientes = () => {

    const navigate = useNavigate();
    //definicion de estados
    const [nombres,setNombres]=useState('');
    const [apellidos,setApellidos]=useState('');
    const [cedula,setCedula]=useState('');
    const [correo,setCorreo]=useState('');
    const [numeroContacto,setNumeroContacto]=useState('');
    const [nit,setNit]=useState('');
    const [direccion,setDireccion]=useState('');

    const{id} = useParams();

    //crear fun mod clientes
    const ModificarClientes = async(e) => {
        e.preventDefault();
        await APIInvoke.invokePUT(`/api/clientes/${id}`,{
            nombres:nombres, apellidos:apellidos, cedula:cedula, correo:correo, numeroContacto:numeroContacto,
            nit:nit, direccion:direccion
        })
       
        navigate('/clientes');
    }
    useEffect(()=>{
        getclientes() 
        // eslint-disable-next-line  
    },[]); 
    
    const getclientes = async()=>{
        const response = await APIInvoke.invokePUT(`/api/clientes/${id}`)
        setNombres(response.nombres);
        setApellidos(response.apellidos);
        setCedula(response.cedula);
        setCorreo(response.correo);
        setNit(response.nit);
        setDireccion(response.direccion);
        setNumeroContacto(response.numeroContacto);
    }


  return (
    <div className="wrapper">
          <Navbar></Navbar> 
            <SidebarContainer></SidebarContainer>
            <div className='content-wrapper'>
                <ContentHeader
                    titulo = {"Dashboard"}
                    breadCrumb1 = {"Inicio"}
                    breadCrumb2 = {"Dashboard"}
                    ruta1={"/home"}                
                />
                <section className='content'>
                    <div className='card'>
                        <div className="card-header">
                            <h3 className="card-title"> <Link to = {'/clientes/agregar'} className='btn btn-block btn-primary btn-sm'>Crear Clientes</Link></h3>
                            <div className="card-tools">
                                <button type = 'button' className="btn btn-tool" data-card-widget = "collapse" title="collapse">
                                    <i className="fas fa-minus"></i>    
                                </button> 

                                <button type = 'button' className="btn btn-tool" data-card-widget = "remove" title="Remove">
                                    <i className="fas fa-minus"></i>
                                </button>                            
                            </div>           
                        </div>
                            <div className="card-body">
                            <form onSubmit = {ModificarClientes}>
                                <div className='card-body'>
                                    <div className='form-group'>  
                                        <label htmlFor="nombre">Nombre</label>
                                        <input type='text'
                                            className ='form-control'
                                            placeholder='Ingrese Nombre'
                                            id='nombres'
                                            name='nombres'
                                            value={nombres}
                                            onChange={(e)=>setNombres(e.target.value)}
                                            required
                                        />
                                        <div className='input-group-append'>
                                            <div className='input-group-text'>
                                                <span className='fas fa-user' />
                                            </div>  
                                        </div>    
                                    </div>
                                </div>

                                <div className='card-body'>
                                    <div className='form-group'>  
                                        <label htmlFor="nombre">Apellidos</label>
                                        <input type='text'
                                            className ='form-control'
                                            placeholder='Ingrese su apellido'
                                            id='apellidos'
                                            name='apellidos'
                                            value={apellidos}
                                            onChange={(e)=>setApellidos(e.target.value)}
                                            required
                                        />
                                        <div className='input-group-append'>
                                            <div className='input-group-text'>
                                                <span className='fas fa-user' />
                                            </div>  
                                        </div>    
                                    </div>
                                </div>

                                <div className='card-body'>
                                    <div className='form-group'>  
                                        <label htmlFor="nombre">cedula</label>
                                        <input type='number'
                                            className ='form-control'
                                            placeholder='Ingrese su identificacion '
                                            id='cedula'
                                            name='cedula'
                                            value={cedula}
                                            onChange={(e)=>setCedula(e.target.value)}
                                            required
                                        />
                                        <div className='input-group-append'>
                                            <div className='input-group-text'>
                                                <span className='fas fa-user' />
                                            </div>  
                                        </div>    
                                    </div>
                                </div>

                                <div className='card-body'>
                                    <div className='form-group'>  
                                        <label htmlFor="nombre">Correo</label>
                                        <input type='text'
                                            className ='form-control'
                                            placeholder='Ingrese su Email'
                                            id='correo'
                                            name='correo'
                                            value={correo}
                                            onChange={(e)=>setCorreo(e.target.value)}
                                            required
                                        />
                                        <div className='input-group-append'>
                                            <div className='input-group-text'>
                                                <span className='fas fa-user' />
                                            </div>  
                                        </div>    
                                    </div>
                                </div>

                                <div className='card-body'>
                                    <div className='form-group'>  
                                        <label htmlFor="nombre">Telefono</label>
                                        <input type='text'
                                            className ='form-control'
                                            placeholder='Ingrese Telefono'
                                            id='numeroContacto'
                                            name='numeroContacto'
                                            value={numeroContacto}
                                            onChange={(e)=>setNumeroContacto(e.target.value)}
                                            required
                                        />
                                        <div className='input-group-append'>
                                            <div className='input-group-text'>
                                                <span className='fas fa-user' />
                                            </div>  
                                        </div>    
                                    </div>
                                </div>

                                <div className='card-body'>
                                    <div className='form-group'>  
                                        <label htmlFor="nombre">Nit</label>
                                        <input type='number'
                                            className ='form-control'
                                            placeholder='Ingrese su  Nit'
                                            id='nit'
                                            name='nit'
                                            value={nit}
                                            onChange={(e)=>setNit(e.target.value)}
                                            required
                                        />
                                        <div className='input-group-append'>
                                            <div className='input-group-text'>
                                                <span className='fas fa-user' />
                                            </div>  
                                        </div>    
                                    </div>
                                </div>

                                <div className='card-body'>
                                    <div className='form-group'>  
                                        <label htmlFor="nombre">Direccion</label>
                                        <input type='text'
                                            className ='form-control'
                                            placeholder='Ingrese Direccion'
                                            id='direccion'
                                            name='direccion'
                                            value={direccion}
                                            onChange={(e)=>setDireccion(e.target.value)}
                                            required
                                        />
                                        <div className='input-group-append'>
                                            <div className='input-group-text'>
                                                <span className='fas fa-user' />
                                            </div>  
                                        </div>    
                                    </div>
                                </div>
                                <div className='card footer'>
                                    <button type='submit' className='btn btn-block btn-primary'>Agregar</button>
                                </div>
                            </form>  


                                
                            </div>
                    </div>
                </section>
            </div>
        <Footer>
            
        </Footer>
    </div>
  )
}

export default EditarClientes



