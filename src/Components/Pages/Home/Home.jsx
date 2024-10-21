import "./Home.css"
import biblioteca1 from '../../../assets/Images/biblioteca1.jpeg'
import biblioteca2 from '../../../assets/Images/biblioteca2.jpeg'

import Navbar from "../../Layouts/Layouts-Home/Navbar/Navbar";
import Carrusel from "../../Layouts/Layouts-Home/Carrusel/Carrusel";
import { LocationCard } from "../../Layouts/LocationCard/LocationCard";

 function Home() {
  return (
    <>
    <Navbar/>
    <hr className="line" />
    <h1 className="title">"Bienvenid@ a la Entidad mas querida por los Colombianos"</h1>
    <Carrusel/>
    <div className="main-container">
    <h2 className="main-title">Biblioteca Sena
    <hr className="line" />
    </h2>
    <input type="text" className="search-bar" placeholder="Buscar..." />
    </div>
    <div className="img-biblioteca">
      <img className="imgb" src={biblioteca1} alt="" />
      <img className="imgb" src={biblioteca2} alt="" />
    </div>
    <h2 className="main-title">Nuestra Ubicación
    <hr className="line1" />
    </h2>
  
    <LocationCard/>
    </>
  )
}
export default Home;