import React,{useState,useEffect} from "react"
import { Link,useNavigate } from "react-router-dom";
import ContentHeader from "../../Componentes/ContentHeader";
import Footer from "../../Componentes/Footer";
import Navbar from "../../Componentes/Navbar";
import SidebarContainer from "../../Componentes/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";
import swal from "sweetalert";




const AgregarProductos= () => {
    const navigate = useNavigate();
    const[productos,setProductos] = useState({
        nombre:'',  marca:'',  cantidad:''});
    const {nombre,marca,cantidad} = productos

    const Onchange = (e)=>{
        setProductos({...productos,
        [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{
        document.getElementById('nombre').focus();
    },[])

    const CrearProductos = async () => {
        const data = {nombre:productos.nombre,
            marca:productos.marca,
            cantidad:productos.cantidad}

    
    const response = await APIInvoke.invokePOST('/api/productos',data)
    const idProductos = response.id;
            if(idProductos ===''){
                const msg = "Error al agregar producto";
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
                navigate ('/productos');
           
            const msg = 'El producto fue creado con exito';
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
        setProductos({nombre:'',marca:'', cantidad:'' });    
    
    }
}
const  Onsubmit=(e)=>{
    e.preventDefault();
    CrearProductos();
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
                               <form onSubmit = {Onsubmit}>
                                <div className='card-body'>
                                    <div className='form-group'>  
                                        <label htmlFor="nombre">Nombre</label>
                                        <input type='text'
                                            className ='form-control'
                                            placeholder='Ingrese Nombre'
                                            id='nombre'
                                            name='nombre'
                                            value={nombre}
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
                                        <label htmlFor="nombre">Marca</label>
                                        <input type='text'
                                            className ='form-control'
                                            placeholder='Ingrese la Marca'
                                            id='marca'
                                            name='marca'
                                            value={marca}
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
                                        <label htmlFor="nombre">cantidad</label>
                                        <input type='number'
                                            className ='form-control'
                                            placeholder='Ingrese la cantidad'
                                            id='cantidad'
                                            name='cantidad'
                                            value={cantidad}
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

export default AgregarProductos



