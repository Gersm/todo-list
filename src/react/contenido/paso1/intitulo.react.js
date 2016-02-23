import React, { Component } from 'react';

// Componente InTitulo
// =============================================================
export class InTitulo extends Component{
   constructor(props) {
      super(props);
      this.state = {

      };
   }
   render(){
      return (
         <div>
            <input
               type="text"
               placeholder="Escribe el titulo de la lista"
            />
            <textarea
               placegolder="Describe tu lista..."
            />
         </div>
      );
   }
}
