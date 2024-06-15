import React from 'react';
import { Link } from 'react-router-dom';

function MainDescuentos() {
    return (
        <div>

            <div classNameName="container">
                <div className="row mt-4">
                    <div className="col-md-3">
                    <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                            <Link to="/principal">
                                <li className="breadcrumb-item"><a>Home</a></li>
                            </Link>
                                <li className="breadcrumb-item active" aria-current="page"> /  Todos los descuentos</li>
                            </ol>
                        </nav>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Filtros</h5>
                                <div className="form-group">
                                    <label htmlFor="categorias">Categorias</label>
                                    <select className="form-control" id="categorias">
                                        <option value="">Seleccione una categoría</option>
                                        <option value="abarrotes">Abarrotes</option>
                                        <option value="carnes">Carnes</option>
                                        <option value="snacks">Snacks</option>
                                        <option value="bebidas">Bebidas</option>
                                        <option value="usopersonal">Uso Personal</option>
                                        <option value="limpieza">Limpieza</option>
                                    </select>
                                </div>
                                <hr />
                                <h6>Subcategorías</h6>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="descuento" />
                                    <label className="form-check-label" htmlFor="descuento">
                                        Descuento
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="precio">Precio</label>
                                    <select className="form-control" id="precio">
                                        <option value="">Seleccione un rango de precio</option>
                                        <option value="0-10">0-10 soles</option>
                                        <option value="10-20">10 - 20 soles</option>
                                        <option value="20-30">20-30 soles</option>
                                        <option value="30-40">30 - 40 soles</option>
                                    </select>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="mas_vendidos" />
                                    <label className="form-check-label" htmlFor="mas_vendidos">
                                        Más Vendidos
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-9">
                        <h4 className="text-right text-center">Todos los descuentos</h4>
                        <hr />
                        <div className="row">

                            <div className="col-md-4 mb-4">
                                <img src="https://plazavea.vteximg.com.br/arquivos/ids/28594257-512-512/929548.jpg" className="img-fluid"></img>
                                <div className="card-body">
                                    <h4 className="card-title text-center">LECHE GLORIA</h4>
                                </div>
                            </div>
                            
                            <div className="col-md-4 mb-4">
                                <img src="https://plazavea.vteximg.com.br/arquivos/ids/27425458-512-512/20251263.jpg" alt="Imagen 2" className="img-fluid">
                               </img>
                                <div className="card-body" >
                                    <h5 className="card-title text-center " >AVENA QUAKER</h5>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <img src="https://plazavea.vteximg.com.br/arquivos/ids/26624105-1000-1000/963407.jpg" alt="Imagen 3" className="img-fluid">
                                </img>
                                <div className="card-body" >
                                    <h5 className="card-title text-center " >FRUGOS DEL VALLE</h5>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <img src="https://plazavea.vteximg.com.br/arquivos/ids/28565879-1000-1000/20389760.jpg" alt="Imagen 4" className="img-fluid">
                                </img>
                                <div className="card-body">
                                    <h5 className="card-title text-center " >JACK DANIELS</h5>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <img src="https://plazavea.vteximg.com.br/arquivos/ids/28815462-1000-1000/20393586.jpg" alt="Imagen 5" className="img-fluid">
                                
                                </img><div className="card-body" >
                                    <h5 className="card-title text-center " >SMART TV</h5>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <img src="https://plazavea.vteximg.com.br/arquivos/ids/28196096-1000-1000/20235718.jpg" alt="Imagen 6" className="img-fluid">
                                </img><div className="card-body" >
                                    <h5 className="card-title text-center " >ACEITE PRIMOR JOHAN'S</h5>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <img src="https://plazavea.vteximg.com.br/arquivos/ids/19529889-1000-1000/20314552.jpg" alt="Imagen 7" className="img-fluid">
                                </img><div className="card-body" >
                                    <h5 className="card-title text-center " >MAYONESA JONI'S</h5>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <img src="https://plazavea.vteximg.com.br/arquivos/ids/553666-1000-1000/99837.jpg" alt="Imagen 8" className="img-fluid">
                                </img><div className="card-body">
                                    <h5 className="card-title text-center " >DLOGAAAAAAA</h5>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <img src="https://plazavea.vteximg.com.br/arquivos/ids/18082704-1000-1000/20283923.jpg" alt="Imagen 9" className="img-fluid">
                                </img><div className="card-body" >
                                    <h5 className="card-title text-center " >ATUN SANTI'S</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainDescuentos;