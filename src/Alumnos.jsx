import React from 'react';
import Add from './Add.jsx';
import './FrmPersona.css';
import { useState } from 'react';
import ListAlumnos from './ListAlumnos.jsx';
import Edit from './Edit.jsx';
import Delete from './Delete.jsx';

function Alumnos({alumnos, grupos}) {
  const [estado, setEstado] = useState('lista');
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
    <>
        <ListAlumnos alumnos={alumnos}/>
        {/* <Add addAlumno={addAlumno} grupos={grupos} />
        <Edit editAlumno={editAlumno} alumnos={alumnos} grupos={grupos}/>
        <Delete deleteAlumno={deleteAlumno} alumnos={alumnos} /> */}
    </>
  )
}

export default Alumnos