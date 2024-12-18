import React from 'react';
import { useParams } from 'react-router-dom';

const alumnos = [
    {grupo:"A", nombre: "Juan"},
    {grupo:"A", nombre: "Eva"},
    {grupo:"B", nombre: "Ana"},
    {grupo:"B", nombre: "Julia"},
    {grupo:"B", nombre: "Antonio"},
];    


function Grupo() {

  const { letra } = useParams();
  return (
    <div>
        <h2>Alumnos del grupo {letra}</h2>
        <ul>
            {alumnos.filter(alumno => alumno.grupo === letra)
                .map((alumno,i) => <li key={i}>{alumno.nombre}</li>
                )
            }
        </ul>
    </div>
  )
}

export default Grupo