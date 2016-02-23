import React, { Component } from 'react';
import { Items } from './lista/items.react.js';

// Componente Pasodos - contenedor
// =============================================================
export class Pasodos extends Component{
   constructor(props) {
      super(props);
   }
   render(){
      return (
         <ul>
            {
               this.props.items.map((elementos) => {
                  return (
                     <Items
                        elementos={elementos}
                     />
                  )
               })
            }
         </ul>
      );
   }
}
