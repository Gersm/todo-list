import React, { Component } from 'react';

// Componente Ingreso
// =============================================================
export class Ingreso extends Component{
   constructor(props) {
      super(props);
      this.state = {
         tarea: ''
      };
   }
   newtarea(input){
      this.setState({tarea: input.target.value});
   }
   agregar(evt){
      evt.preventDefault();
      this.props.add.call(null,this.state.tarea);
      this.refs.refinput.value = "";
      this.refs.refinput.focus();
   }
   render(){
      return (
         <form
            onSubmit={this.agregar.bind(this)}
         >
            <input
               type="text"
               placeholder="Escribe una nueva tarea.."
               onChange={this.newtarea.bind(this)}
               ref="refinput"
               autoFocus={true}
            />
            <button>
               Agregar
            </button>
         </form>
      );
   }
}
