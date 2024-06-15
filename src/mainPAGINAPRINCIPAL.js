import Carousel from 'react-bootstrap/Carousel';
import './stylemain.css';
import { useNavigate } from 'react-router-dom';
const feather = require('feather-icons');
import productos from './data/productosPaginaPrincipal.json'
setTimeout(() => {
    feather.replace();
}, 500);

const Main = () => {
    const navigate = useNavigate();

    const handleClick = (slug) => {
        navigate("/detalle/" + slug);
    }

    return <main>
        <Carousel>
            {
                productos.map(it => {
                    return (<Carousel.Item onClick={(e) => {
                        e.preventDefault(); handleClick(it.slug)
                    }}>
                        <img className='w-100 dark-image' src={it.picture}></img>
                        <Carousel.Caption>
                            <h3>{it.name}</h3>
                            <p>{it.description}</p>
                            <button className="btn btn-primary" >Ver detalle</button>
                        </Carousel.Caption>
                    </Carousel.Item>);
                })
            }
        </Carousel>

        <hr />
        <div class="categories-section text-center"></div>
        <h2 class="text-center">CATEGORÍAS</h2>
        <div >
            <img src="https://cdn-icons-png.flaticon.com/512/2921/2921822.png" alt="Categoria 1" class="category-button"></img>
            <img src="https://e7.pngegg.com/pngimages/214/164/png-clipart-computer-icons-food-coffee-canning-roast-chicken-peach-icon-food-text-thumbnail.png" alt="Categoria 2" class="category-button"></img>
            <img src="https://static.vecteezy.com/system/resources/previews/025/730/033/non_2x/sauces-icon-in-illustration-vector.jpg"
                alt="Categoria 3" class="category-button"></img>
            <img src="https://static9.depositphotos.com/1041273/1193/v/450/depositphotos_11933975-stock-illustration-fruit-vector-set.jpg" alt="Categoria 4" class="category-button"></img>
            <img src="" alt="Categoria 5" class="category-button"></img>
            <img src="" alt="Categoria 5" class="category-button "></img>
        </div>
        <hr />

        <div class="popular-products-section text-center">
            <h2 class="text-center">PRODUCTOS MÁS VENDIDOS</h2>
            <div>
                <div class="product-card">
                    <img src="" alt="Producto 1" class="product-image"></img>
                    <div class="product-name">CLORO</div>
                </div>
                <div class="product-card">
                    <img src="" alt="Producto 2" class="product-image"></img>
                    <div class="product-name">LEJIA</div>
                </div>
                <div class="product-card">
                    <img src="" alt="Producto 3" class="product-image"></img>
                    <div class="product-name">DETERGENTE</div>
                </div>
                <div class="product-card">
                    <img src="" alt="Producto 4" class="product-image"></img>
                    <div class="product-name">LECHE</div>
                </div>
                <div class="product-card">
                    <img src="" alt="Producto 5" class="product-image"></img>
                    <div class="product-name">SIBARITA</div>
                </div>
            </div>
        </div>

        <div class="about-us-section text-center">
            <h2>¿QUIÉNES SOMOS?</h2>
            <div>
                <div class="about-card">
                    <h3 class="about-title">Historia</h3>
                    <p class="about-content"></p>
                </div>
                <div class="about-card">
                    <h3 class="about-title">Misión</h3>
                    <p class="about-content"></p>
                </div>
                <div class="about-card">
                    <h3 class="about-title">Visión</h3>
                    <p class="about-content"></p>
                </div>
            </div>
        </div>
    </main >;
}
export default Main;