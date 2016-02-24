import React, { Component } from 'react';
import { Items } from './lista/items.react.js';

// Componente Lista - contenedor
// =============================================================
export class Lista extends Component{
   constructor(props) {
      super(props);
   }
   render(){
      return <ul>
         {this.props.items.map((elementos) => {
            return <Items
               key={elementos.id}
               llave={elementos.id}
               elementos={elementos}
               dell={this.props.dell}
               newestado={this.props.newestado}
            />
         })}
      </ul>
   }
}
