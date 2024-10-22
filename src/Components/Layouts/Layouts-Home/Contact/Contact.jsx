import React, { useState } from "react";
import './Contact.css'

const FormularioContacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log("Datos enviados:", formData);
  };

  return (
    <div className="container-contact">
    <form  onSubmit={handleSubmit}>
      <div className="text-form">
        <label>Nombre:</label>
        <input
        placeholder="Nombre"
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
      </div>
      <div  className="text-form">
        <label>Teléfono:</label>
        <input
        placeholder="Teléfono"
          type="tel"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          required
        />
      </div>
      <div  className="text-form" >
        <label>Correo:</label>
        <input
        placeholder="Correo"
          type="email"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          required
        />
      </div>
      <div  className="text-form">
        <label>Mensaje:</label>
        <textarea
        placeholder="Mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          required
        />
      </div>
      <button className="btn-contact" type="submit">Enviar</button>
    </form>
    </div>
  );
};

export default FormularioContacto;
