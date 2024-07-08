import React,{useState,useEffect} from "react"
import { Link,useNavigate } from "react-router-dom";
import ContentHeader from "../../Componentes/ContentHeader";
import Footer from "../../Componentes/Footer";
import Navbar from "../../Componentes/Navbar";
import SidebarContainer from "../../Componentes/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";
import swal from "sweetalert";




const AgregarClientes= () => {
    const navigate = useNavigate();
    const[clientes,setClientes] = useState({
        nombres:'',  apellidos:'',  cedula:'',  correo:'',    numeroContacto:'', nit:'', direccion:''  });
    const {nombres,apellidos,cedula, correo,numeroContacto,nit,direccion} = clientes

    const Onchange = (e)=>{
        setClientes({...clientes,
        [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{
        document.getElementById('nombres').focus();
    },[])

    const CrearClientes = async () => {
        const data = {nombres:clientes.nombres,
            apellidos:clientes.apellidos,
            cedula:clientes.cedula,
            correo:clientes.correo,
            numeroContacto:clientes.numeroContacto,
            nit:clientes.nit,direccion:clientes.direccion}

    
    const response = await APIInvoke.invokePOST('/api/clientes',data)
    const idClientes = response.id;
            if(idClientes ===''){
                const msg = "Error al agregar cliente";
                swal ({
                    title:'Error',
                    text:msg,
                    icon:'error',
                    buttons:{
                        confirm:{
                            text:'ok',
                            value:true,
                            visible:true,
                            className:'btn btn-danger',
                            closeModal:true
                        }
                    } 
                });

            }else{
                navigate ('/clientes');
           
            const msg = 'El cliente fue creado con exito';
            swal ({
                title:'Info',
                text:msg,
                icon:'success',
                buttons:{
                    confirm:{
                        text:'ok',
                        value:true,
                        visible:true,
                        className:'btn btn-primary',
                        closeModal:true
                    }
                } 
            });
        setClientes({nombres:'',apellidos:'', cedula:'',correo:'',  numeroContacto:'', nit:'', direccion:''  });    
    
    }
}
const  Onsubmit=(e)=>{
    e.preventDefault();
    CrearClientes();
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
                               <form onSubmit = {Onsubmit}>
                                <div className='card-body'>
                                    <div className='form-group'>  
                                        <label htmlFor="nombre">Nombre</label>
                                        <input type='text'
                                            className ='form-control'
                                            placeholder='Ingrese Nombre'
                                            id='nombres'
                                            name='nombres'
                                            value={nombres}
                                            onChange={Onchange}
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
                                            onChange={Onchange}
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
                                            onChange={Onchange}
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
                                            onChange={Onchange}
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
                                            onChange={Onchange}
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
                                            onChange={Onchange}
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
                                            placeholder='Ingrese Nombre'
                                            id='direccion'
                                            name='direccion'
                                            value={direccion}
                                            onChange={Onchange}
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

export default AgregarClientes



