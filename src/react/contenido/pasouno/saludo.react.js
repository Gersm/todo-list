import React, { Component } from 'react';

// Componente Saludo
// =============================================================
export class Saludo extends Component{
   constructor(props) {
      super(props);
   }
   render(){
      return (
         <div>
            <h3>{ this.props.hola }</h3>
            <p>{ this.props.descripcion }</p>
         </div>
      );
   }
}
