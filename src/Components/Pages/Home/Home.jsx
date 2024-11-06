import "./Home.css"
import biblioteca1 from '../../../assets/Images/biblioteca1.jpeg'
import biblioteca2 from '../../../assets/Images/biblioteca2.jpeg'
import FAQItem from '../../Layouts/Questions/Questions'
import Navbar from "../../Layouts/Layouts-Home/Navbar/Navbar";
import Carrusel from "../../Layouts/Layouts-Home/Carrusel/Carrusel";
import { LocationCard } from "../../Layouts/LocationCard/LocationCard";
import { Footer } from '../../Layouts/Footer/Footer'
import FormularioContacto from "../../Layouts/Layouts-Home/Contact/Contact";

 function Home() {
  return (
    <>
    <Navbar/>
    <hr className="line" />
    <h1 className="title-welcome">"Bienvenid@ a la Entidad mas querida por los Colombianos"</h1>
    <Carrusel/>
    <hr className="line2" />
    
    <h2 className="main-title">Nuestra Ubicación
    <hr className="line1" />
    </h2>
  <div className="location-home">
    <LocationCard/>
    <p className="text-location">Servicio Nacional de Aprendizaje SENA - Dirección General <br />
Calle 57 No. 8 - 69 Bogotá D.C. (Cundinamarca), Colombia <br />
Conmutador Nacional (57 1) 5461500 - Extensiones <br />
Correo notificaciones judiciales: servicioalciudadano@sena.edu.co</p>
</div>
<hr className="line2" />
<h2 className="main-title">Contáctanos
    <hr className="line1" />
    </h2>
<FormularioContacto/>
<hr className="line2" />
<h2 className="main-title">Preguntas Frecuentes
    <hr className="line1" />
    </h2>
    <FAQItem/>
    <hr className="line2" />
    <Footer/>
    </>
  )
}
export default Home;