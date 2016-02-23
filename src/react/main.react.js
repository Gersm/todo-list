import React from 'react';
import { render } from 'react-dom';
import { Contenido } from './contenido.react.js';


// Renderizacion de componentes - RAIZ
// =============================================================
render(
   <Contenido />,
   document.querySelector('#contenido')
);
