import "./Home.css"
import Navbar from "../../Layouts/Layouts-Home/Navbar/Navbar";
import Carrusel from "../../Layouts/Layouts-Home/Carrusel/Carrusel";

 function Home() {
  return (
    <>
    <Navbar/>
    <hr />
    <h1 className="title">"Bienvenid@ a la Entidad mas querida por los Colombianos"</h1>
    <Carrusel/>
    </>
  )
}
export default Home;