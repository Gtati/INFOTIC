import React, { useState } from 'react';
import { Card } from './Card';
import ExampleImageCourse from './../../../assets/Images/biblioteca2.jpeg';
import './Card-List-Courses.css';

export const CardListCourses = () => {
  const [selectedType, setSelectedType] = useState('todos'); 

  const courses = [
    { id: 1, type: 'curso', image: ExampleImageCourse, name: 'Introducción a la Programación', description: 'Aprende los fundamentos de la programación con este curso para principiantes.' },
    { id: 2, type: 'curso', image: ExampleImageCourse, name: 'Desarrollo Web con HTML y CSS', description: 'Domina las tecnologías clave para construir sitios web desde cero.' },
    { id: 3, type: 'curso', image: ExampleImageCourse, name: 'JavaScript Avanzado', description: 'Profundiza en JavaScript y aprende sobre las funciones avanzadas del lenguaje.' },
    { id: 4, type: 'carrera', image: ExampleImageCourse, name: 'Técnico en Sistemas', description: 'Desarrolla habilidades en soporte y mantenimiento de sistemas informáticos.' },
    { id: 5, type: 'carrera', image: ExampleImageCourse, name: 'Técnico en Redes de Datos', description: 'Aprende a configurar y gestionar redes de comunicación de datos.' },
    { id: 6, type: 'carrera', image: ExampleImageCourse, name: 'Técnico en Desarrollo de Software', description: 'Construye aplicaciones y software desde cero.' },
  ];

  const filteredCourses = selectedType === 'todos' 
    ? courses 
    : courses.filter(course => course.type === selectedType);

  return (
    <>
      <div className="filter-buttons">
        <button onClick={() => setSelectedType('todos')}>Todos</button>
        <button onClick={() => setSelectedType('curso')}>Cursos</button>
        <button onClick={() => setSelectedType('carrera')}>Carreras Técnicas</button>
      </div>
      <div className="card-list-courses">
        {filteredCourses.map(course => (
          <Card 
            key={course.id} 
            image={course.image} 
            name={course.name} 
            description={course.description} 
          />
        ))}
      </div>
    </>
  );
};
