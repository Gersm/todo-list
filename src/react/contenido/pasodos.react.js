import React, { Component } from 'react';
import { Lista } from './pasodos/lista.react.js';

// Componente Pasodos - contenedor
// =============================================================
export class Pasodos extends Component{
   constructor(props) {
      super(props);
   }
   render(){
      return (
         <div>
            <Lista
               items={this.props.items}
            />
         </div>
      );
   }
}
