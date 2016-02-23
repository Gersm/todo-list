import React from 'react';
import { render } from 'react-dom';
import { Contenido } from './contenido/contenedor.react.js';


// Renderizacion de componentes
// =============================================================
render(
   <Contenido />,
   document.querySelector('#contenido')
);
