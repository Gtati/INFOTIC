import React, { useState } from "react";
import './Questions.css'
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleFAQ}>
        <h3>{question}</h3>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="faq-answer"><p>{answer}</p></div>}
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: "¿Cómo puedo crear una cuenta?",
      answer: "Puedes crear una cuenta haciendo clic en el botón de registro y siguiendo los pasos indicados.",
    },
    {
      question: "¿Cómo restablezco mi contraseña?",
      answer: "Para restablecer tu contraseña, haz clic en 'Olvidé mi contraseña' y sigue las instrucciones enviadas a tu correo.",
    },
    {
      question: "¿Cómo contacto con soporte?",
      answer: "Puedes contactar con soporte enviando un correo a soporte@ejemplo.com o utilizando el chat en vivo disponible en la página.",
    },
    // Agrega más preguntas y respuestas aquí
  ];

  return (
    <section className="faq-section">
      <h2>Preguntas Frecuentes</h2>
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </section>
  );
};

export default FAQ;
