import React from 'react';
import { useParams } from 'react-router-dom';

function Edit({grupos, alumnos, editAlumno}) {
  const { id } = useParams();
  const alumno = alumnos.find( alumn => alumn.id == id);
  return (
   <>
        <div>Edit Alumno:{id}</div>
          <form id="myForm"> 
            <label htmlFor="id">id:</label>
            <input type="text" name="id" pattern="\d+" id="id" value={alumno.id} disabled/>
            <label htmlFor="nombre">nombre:</label>
            <input type="text" name="nombre" pattern="[A-Za-z]{4,20}" id="nombre" value={alumno.nombre} required/>
            <label htmlFor="grupo">grupo:</label>
            <select name="grupo" id="grupo" required>
                { grupos.map( (grupo,i) => grupo==alumno.grupo?<option key={`${i}+${grupo}`} value={grupo} defaultValue>{grupo}</option>
                                                                :<option key={`${i}+${grupo}`} value={grupo}>{grupo}</option>)}
            </select>
            <button type="submit" onClick={ (e) => {
              let formulario = document.getElementById('myForm');
              e.preventDefault()
              editAlumno({id:parseInt(id), grupo:formulario.grupo.value, nombre:formulario.nombre.value});
            }}>Añadir</button>
      </form>
   </> 

  )
}

export default Edit