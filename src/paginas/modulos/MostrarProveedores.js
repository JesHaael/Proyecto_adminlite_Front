import React,{useState,useEffect} from "react"
import { Link } from "react-router-dom";
import ContentHeader from "../../Componentes/ContentHeader";
import Footer from "../../Componentes/Footer";
import Navbar from "../../Componentes/Navbar";
import SidebarContainer from "../../Componentes/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";
import swal from "sweetalert";


const MostrarProveedores =()=>{
    const [proveedores,setProveedores] = useState([]);
    const getProveedores = async()=>{
        const response = await APIInvoke.invokeGET('/api/proveedores');
        setProveedores(response);
    } 
    
    useEffect(()=>{
        getProveedores();
    },[])


   const eliminarProveedores =async(e,idProveedor)=>{
        e.preventDefault();
        
        const response = await APIInvoke.invokeDELETE(`/api/proveedores/${idProveedor}`);
        setProveedores(response.proveedores);
    
   if(response.msg === 'El proveedor ha sido eliminado' ){
        const msg = 'El proveedor ha sido eliminado';
        swal ({
            title:'Informacion',
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
        getProveedores();

   }else{
    const msg = 'El proveedor no pudo ser eliminado correctamente'
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
   }
}
return(

    //<div></div>
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
                                <table className="table table-bordered" >
                                    <thead>
                                        <tr>
                                            <th style={{width:'15%'}}>Nombre Proveedor</th>
                                            <th style={{width:'15%'}}>Email</th>
                                            <th style={{width:'10%'}}>numero Contacto</th>
                                            <th style={{width:'10%'}}>Nit</th>
                                            <th style={{width:'15%'}}>Direccion</th>
                                            <th style={{width:'10%'}}>Tipo</th>
                                            <th style={{width:'10%'}}>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {proveedores.map((proveedores,index)=>(
                                           <tr key={index}>
                                                <td>{proveedores.nombres}</td>
                                                <td>{proveedores.email}</td>
                                                <td>{proveedores.numeroContacto}</td>
                                                <td>{proveedores.nit}</td>
                                                <td>{proveedores.direccion}</td>
                                                <td>{proveedores.tipo}</td>
                                                
                                                
                                                   
                                                <td>
                                                    <Link to ={`/proveedores/editar/${proveedores._id}`} className="btn btn-primary mt-2 mb-2" ><i className="fa-solid fa-pen-to-square"></i> </Link>
                                                    <button onClick={(e)=>eliminarProveedores(e,proveedores._id)}className=" btn btn-danger mt-2 mb-2" ><i className="fa-solid fa-trash"></i> </button>
                                                </td> 
                                           </tr>     
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                    </div>
                </section>
            </div>
        <Footer>
            
        </Footer>
    </div>
);


}

export default  MostrarProveedores