import React, { Component } from 'react';

// Componente Ingreso
// =============================================================
export class Ingreso extends Component{
   constructor(props) {
      super(props);
   }
   render(){
      return (
         <div>
            <input
               type="text"
               placeholder="Escribe una nueva tarea.."
            />
            <button>
               Agregar
            </button>
         </div>
      );
   }
}
