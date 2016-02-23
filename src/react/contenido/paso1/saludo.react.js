import React, { Component } from 'react';

// Componente Saludo
// =============================================================
export class Saludo extends Component{
   constructor(props) {
      super(props);
      this.state = {

      };
   }
   render(){
      return (
         <div>
            <h3>
               { this.props.hola }
            </h3>
         </div>
      );
   }
}
