import React,{useState,useEffect} from "react"
import { Link,useNavigate,useParams } from "react-router-dom";
import ContentHeader from "../../Componentes/ContentHeader";
import Footer from "../../Componentes/Footer";
import Navbar from "../../Componentes/Navbar";
import SidebarContainer from "../../Componentes/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";
//import swal from "sweetalert";
 



const EditarProductos = () => {

    const navigate = useNavigate();
    //definicion de estados
    const [nombre,setNombre]=useState('');
    const [marca,setMarca]=useState('');
    const [cantidad,setCantidad]=useState('');
    
    const{id} = useParams();

    //crear fun mod clientes
    const ModificarProductos = async(e) => {
        e.preventDefault();
        await APIInvoke.invokePUT(`/api/productos/${id}`,{
            nombre:nombre, marca:marca, cantidad:cantidad
        })
       
        navigate('/productos');
    }
    useEffect(()=>{
        getproductos() 
        // eslint-disable-next-line  
    },[]); 
    
    const getproductos = async()=>{
        const response = await APIInvoke.invokePUT(`/api/productos/${id}`)
        setNombre(response.nombre);
        setMarca(response.marca);
        setCantidad(response.cantidad);
        
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
                            <h3 className="card-title"> <Link to = {'/productos/agregar'} className='btn btn-block btn-primary btn-sm'>Crear Productos</Link></h3>
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
                            <form onSubmit = {ModificarProductos}>
                                <div className='card-body'>
                                    <div className='form-group'>  
                                        <label htmlFor="nombre">Nombre</label>
                                        <input type='text'
                                            className ='form-control'
                                            placeholder='Ingrese Nombre'
                                            id='nombres'
                                            name='nombres'
                                            value={nombre}
                                            onChange={(e)=>setNombre(e.target.value)}
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
                                        <label htmlFor="nombre">Marca</label>
                                        <input type='text'
                                            className ='form-control'
                                            placeholder='Ingrese la Marca'
                                            id='marca'
                                            name='marca'
                                            value={marca}
                                            onChange={(e)=>setMarca(e.target.value)}
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
                                        <label htmlFor="nombre">Cantidad</label>
                                        <input type='number'
                                            className ='form-control'
                                            placeholder='Ingrese su identificacion '
                                            id='cantidad'
                                            name='cantidad'
                                            value={cantidad}
                                            onChange={(e)=>setCantidad(e.target.value)}
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

export default EditarProductos



