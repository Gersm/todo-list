import React, { Component } from 'react';

// Componente Items - contenedor
// =============================================================
export class Items extends Component{
   constructor(props) {
      super(props);
   }
   estado(){
      this.props.newestado.call(null, this.props.llave)
   }
   eliminar(){
      this.props.dell.call(null, this.props.llave)
   }
   render(){
      return (
         <li>
            <span>{this.props.elementos.descripcion}</span>
            <button
               onClick={this.estado.bind(this)}
            >{this.props.elementos.estado}</button>
            <button
               onClick={this.eliminar.bind(this)}
            >x</button>
         </li>
      );
   }
}
