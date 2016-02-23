import React, { Component } from 'react';
import { Saludo } from './pasouno/saludo.react.js';
import { Intitulo } from './pasouno/intitulo.react.js';

// Componente PASOUNO - contenedor
// =============================================================
export class Pasouno extends Component{
   constructor(props) {
      super(props);
   }
   render(){
      return (
         <div>
            <Saludo
               hola={this.props.hola}
               descripcion={this.props.descripcion}
            />
            <Intitulo
            />
         </div>
      );
   }
}
