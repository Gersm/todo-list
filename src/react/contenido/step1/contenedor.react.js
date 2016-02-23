import React from 'react';
import { render } from 'react-dom';
import { Saludo } from './saludo.react.js';

// Componente Saludo
// =============================================================
export class Salute extends Component{
   constructor(props) {
      super(props);
      this.state = {
         texto: 'Hola Gersom! Que tienes que hacer hoy?'
      };
   }
   render(){
      return (
         <div id="salute">
            <h3>
               { this.state.texto }
            </h3>
         </div>
      );
   }
}
