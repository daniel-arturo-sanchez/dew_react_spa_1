import React from 'react';
import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <>
     <h1>Inicio: SPA</h1>
     <ul>
        <li>
            <Link to="/centro">Centro</Link>
        </li>
        <li>
            <Link to="/ciclo">Ciclo</Link>
        </li>
        <li>
            <Link to="/curso">Curso</Link>  

        </li>
     </ul>
    </>
  )
}

export default Inicio