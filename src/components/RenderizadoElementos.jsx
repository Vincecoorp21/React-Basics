import PropTypes from 'prop-types';
import React, { Component } from 'react';
import data from '../helpers/data.json';

//deberia tener su propio archivo pero estamos probando
function ElementoLista(props) {
  return (
    <li>
      <a href={props.el.web}>{props.el.name}</a>
    </li>
  );
}

export class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ['Primavera', 'Verano', 'Otoño', 'Invierno'],
    };
  }
  //Para detectar cada uno de los elementos al renderizar necesitas una key
  render() {
    console.log(data);
    return (
      <div>
        <h2>RenderizadoElementos</h2>
        <h3>Estaciones del año</h3>
        <ol>
          {this.state.seasons.map((estacion, index) => (
            <li key={index}>{estacion}</li>
          ))}
        </ol>
        <h3>Frameworks Frontend JS</h3>
        <ul>
          {data.frameworks.map(elemento => (
            <ElementoLista key={elemento.id} el={elemento} />
          ))}
        </ul>
      </div>
    );
  }
}

export default RenderizadoElementos;
