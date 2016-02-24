import React, { Component } from 'react';
import { Lista } from './pasodos/lista.react.js';
import { Ingreso } from './pasodos/ingreso.react.js';

// Componente Pasodos - contenedor
// =============================================================
export class Pasodos extends Component{
   constructor(props) {
      super(props);
   }
   render(){
      return (
         <div>
            <Ingreso
               add={this.props.add}
            />
            <Lista
               items={this.props.items}
               dell={this.props.dell}
               newestado={this.props.newestado}
            />
         </div>
      );
   }
}
