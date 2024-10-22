import React from 'react'
import { Card } from './Card'
import ExampleImageCourse from './../../../assets/Images/biblioteca2.jpeg'
import './Card-List-Courses.css'

export const CardListCourses = () => {

  const courses = [
    {
      id: 1,
      image: ExampleImageCourse,
      name: 'Introducción a la Programación',
      description: 'Aprende los fundamentos de la programación con este curso para principiantes.',
    },
    {
      id: 2,
      image: ExampleImageCourse,
      name: 'Desarrollo Web con HTML y CSS',
      description: 'Domina las tecnologías clave para construir sitios web desde cero.',
    },
    {
      id: 3,
      image: ExampleImageCourse,
      name: 'JavaScript Avanzado',
      description: 'Profundiza en JavaScript y aprende sobre las funciones avanzadas del lenguaje.',
    },
    {
      id: 4,
      image: ExampleImageCourse,
      name: 'React: De Cero a Experto',
      description: 'Descubre cómo crear aplicaciones web interactivas con React.',
    },
    {
      id: 5,
      image: ExampleImageCourse,
      name: 'Bases de Datos SQL',
      description: 'Aprende a diseñar y manejar bases de datos con SQL.',
    },
    {
      id: 6,
      image: ExampleImageCourse,
      name: 'Desarrollo de API REST con Node.js',
      description: 'Construye APIs robustas utilizando Node.js y Express.',
    }
  ];
  
  return (
    <div className="card-list-courses">
      {courses.map(course => (
        <Card 
        id={course.id} 
        image={course.image} 
        name={course.name} 
        description={course.description}/>
      ))}
    </div>
  )
}
