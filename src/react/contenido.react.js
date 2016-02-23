import React, { Component } from 'react';
import { Pasouno } from './contenido/pasouno.react.js';
import { Pasodos } from './contenido/pasodos.react.js';

// Componente CONTENIDO - contenedor
// =============================================================
export class Contenido extends Component{
   constructor(props) {
      super(props);
      this.state = {
         hola: 'Hola Gersom!',
         descripcion: 'Que tienes que hacer hoy?',
         titulo: 'prueba',
         desc: 'desc prueba',
         items: [ 'elemento1', 'elemento2' ]
      };
   }
   render(){
      return (
         <div>
            <Pasouno
               hola={this.state.hola}
               descripcion={this.state.descripcion}
            />
            <Pasodos
               items={this.state.items}
            />
         </div>
      );
   }
}
