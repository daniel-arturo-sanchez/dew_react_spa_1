import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

const alumnos = [
  {id: 1, grupo:"A", nombre: "Juan"},
  {id: 2, grupo:"A", nombre: "Eva"},
  {id: 3, grupo:"B", nombre: "Ana"},
  {id: 4, grupo:"B", nombre: "Julia"},
  {id: 5, grupo:"B", nombre: "Antonio"},
];    

const grupos = ["A","B"];

function Layoutlet() {

  const [numAlumnos, setNumAlumnos] = useState(alumnos.length);

  function validateId(id){
      let response = alumnos.findIndex(alumno => alumno.id == id);
      return response == -1
  }

  function addAlumno(alumno){
      if(validateId(alumno.id)){
          alumnos.push(alumno);
          setNumAlumnos(alumnos.length);
      } else {
          alert("Id inválido")
      }     
  }

  function editAlumno(alumno){
      let alumnoIdEdit = alumnos.findIndex(alumn => alumn.id == alumno.id);
      if(alumnoIdEdit !== -1){
          alumnos.splice(alumno.id,1,alumno);
          setNumAlumnos(alumnos.length);
      } else {
          alert("No existe un alumno con ese id")
      }     
  }

  function deleteAlumno(id){
      let alumnoIdDelete = alumnos.findIndex(alumn => alumn.id == id);
      if(alumnoIdDelete !== -1){
          alumnos.splice(alumnoIdDelete,1);
          setNumAlumnos(alumnos.length);
      } else {
          alert("No existe un alumno con ese id")
      }  
  }

  return (
    <main>
        <nav>
            <Link to="/">Inicio | </Link>
            <Link to="/centro">Centro | </Link>
            <Link to="/curso">Curso | </Link>
            <Link to="/daw2">2º DAW  | </Link>
            <Link to="/alumnos">Alumnos</Link>
        </nav>
        <div>
            <Outlet grupos={grupos} alumnos={alumnos} addAlumno={addAlumno} editAlumno={editAlumno} deleteAlumno={deleteAlumno} />
        </div>
    </main>
  )
}

export default Layoutlet