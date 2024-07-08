import React,{useState,useEffect} from "react"
import { Link,useNavigate,useParams } from "react-router-dom";
import ContentHeader from "../../Componentes/ContentHeader";
import Footer from "../../Componentes/Footer";
import Navbar from "../../Componentes/Navbar";
import SidebarContainer from "../../Componentes/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";
//import swal from "sweetalert";
 



const EditarProveedores = () => {

    const navigate = useNavigate();
    //definicion de estados
    const [nombres,setNombres]=useState('');
    const [email,setEmail]=useState('');
     const [numeroContacto,setNumeroContacto]=useState('');
    const [nit,setNit]=useState('');
    const [direccion,setDireccion]=useState('');
    const [tipo,setTipo]=useState('');
    const{id} = useParams();

    //crear fun mod clientes
    const ModificarProveedores = async(e) => {
        e.preventDefault();
        await APIInvoke.invokePUT(`/api/proveedores/${id}`,{
            nombres:nombres, email:email,  numeroContacto:numeroContacto,
            nit:nit, direccion:direccion, tipo:tipo
        })
       
        navigate('/proveedores');
    }
    useEffect(()=>{
        getproveedores() 
        // eslint-disable-next-line  
    },[]); 
    
    const getproveedores = async()=>{
        const response = await APIInvoke.invokePUT(`/api/proveedores/${id}`)
        setNombres(response.nombres);
        setEmail(response.email);
        setNumeroContacto(response.numeroContacto);
        setNit(response.nit);
        setDireccion(response.direccion);
        setTipo(response.tipo);    
        
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
                            <h3 className="card-title"> <Link to = {'/proveedores/agregar'} className='btn btn-block btn-primary btn-sm'>Crear Proveedores</Link></h3>
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
                            <form onSubmit = {ModificarProveedores}>
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
                                        <label htmlFor="nombre">Correo</label>
                                        <input type='text'
                                            className ='form-control'
                                            placeholder='Ingrese su Email'
                                            id='email'
                                            name='email'
                                            value={email}
                                            onChange={(e)=>setEmail(e.target.value)}
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
                                <div className='card-body'>
                                    <div className='form-group'>  
                                        <label htmlFor="nombre">Tipo</label>
                                        <input type='text'
                                            className ='form-control'
                                            placeholder='Ingrese su apellido'
                                            id='tipo'
                                            name='tipo'
                                            value={tipo}
                                            onChange={(e)=>setTipo(e.target.value)}
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

export default EditarProveedores



