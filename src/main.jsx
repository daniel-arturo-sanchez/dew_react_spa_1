import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Contenedor from './Contenedor.jsx'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Inicio from './Inicio.jsx';
import Centro from './Centro.jsx';
import Ciclo from './Ciclo.jsx';
import Curso from './Curso.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <Contenedor />
  // </StrictMode>,
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inicio />}></Route>
      <Route path="/curso" element={<Curso />}></Route>
      <Route path="/ciclo" element={<Ciclo />}></Route>
      <Route path="/centro" element={<Centro />}></Route>
      <Route path="*" element={<Navigate to="/" replace="true" />}></Route>
    </Routes>
  </BrowserRouter>
)
