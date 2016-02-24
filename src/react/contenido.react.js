import React, { Component } from 'react';
import { Pasouno } from './contenido/pasouno.react.js';
import { Pasodos } from './contenido/pasodos.react.js';

// Componente CONTENIDO - contenedor
// =============================================================
export class Contenido extends Component{
   constructor(props) {
      super(props);
      this.state = {
         elementjson: {
            "id": "lista1",
            "titulo": "Hola Gersom!",
            "descipcion": "Que tienes que hacer hoy?",
            "items": []
         }
      };
      this.agregaritem = this.agregaritem.bind(this);
      this.eliminaritem = this.eliminaritem.bind(this);
      this.rendearitems = this.rendearitems.bind(this);
      this.cambiarestado = this.cambiarestado.bind(this);
   }
   agregaritem(desc){
      let ijson = this.state.elementjson.items;
      let newitem;
      if (ijson.length === 0) {
         newitem = {
            "id" : `item${1}`,
            "descripcion": `${desc}`,
            "estado": "porhacer"
         }
      } else {
         let id = ijson[ijson.length-1].id;
         id = id.substring(4,10);;
         id = parseInt(id);
         id = id + 1;
         newitem = {
            "id" : `item${id}`,
            "descripcion": `${desc}`,
            "estado": "porhacer"
         }
      }
      ijson = ijson.concat(newitem);
      this.rendearitems(ijson);
   }
   eliminaritem(id){
      var ijson = this.state.elementjson.items;
      var iditem = this.indicedelitem(ijson,id);
      ijson.splice(iditem,1);
      this.rendearitems(ijson);
   }
   cambiarestado(id){
      var ijson = this.state.elementjson.items;
      var indice = this.indicedelitem(ijson,id);
      if (ijson[indice].estado === 'porhacer') {
         ijson[indice].estado = 'hecho';
      } else {
         ijson[indice].estado = 'porhacer';
      }
      this.rendearitems(ijson);
   }
   indicedelitem(array,id){
      for (var i = 0; i < array.length; i++) {
         if (array[i].id === id) {
            return i;
            break;
         }
      }
   }
   rendearitems(newsitems){
      var newjson = this.state.elementjson;
      newjson.items = newsitems;
      this.setState({
         elementjson : newjson
      });
   }
   render(){
      return (
         <div>
            <Pasouno
               hola={this.state.elementjson.titulo}
               descripcion={this.state.elementjson.descripcion}
            />
            <Pasodos
               items={this.state.elementjson.items}
               add={this.agregaritem}
               dell={this.eliminaritem}
               newestado={this.cambiarestado}
            />
         </div>
      );
   }
}
