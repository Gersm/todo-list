import React, { Component } from 'react';

// Componente Contenedor
// =============================================================
export class Saludo extends Component{
   constructor(props) {
      super(props);
      this.state = {
         texto: '¡¡¡ Hello World !!!'
      };
   }
   render(){
      return (
         <div id="saludo">
            <h3>
               { this.state.texto }
            </h3>
         </div>
      );
   }
}
