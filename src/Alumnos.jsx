import React from 'react';
import Add from './Add.jsx';
import './FrmPersona.css';
import { useState } from 'react';
import ListAlumnos from './ListAlumnos.jsx';
import Edit from './Edit.jsx';

function Alumnos({alumnos}) {
  const [estado, setEstado] = useState('lista');
  return (
    <>
        <ListAlumnos alumnos={alumnos}/>
    </>
  )
}

export default Alumnos