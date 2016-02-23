import React, { Component } from 'react';

// Componente Intitulo
// =============================================================
export class Intitulo extends Component{
   constructor(props) {
      super(props);
   }
   siguientepaso(){
      this.props.continuar.call(null);
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
            <button>Continuar</button>
         </div>
      );
   }
}
