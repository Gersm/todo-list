import React, { Component } from 'react';

// Componente Pasodos - contenedor
// =============================================================
export class Pasodos extends Component{
   constructor(props) {
      super(props);
   }
   render(){
      return (
         <li>
            {this.props.elementos}
         </li>
      );
   }
}
