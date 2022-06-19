import React, { Component } from 'react';

const Componente = props => {
  return <h2>{props.msg}</h2>;
};

// function Componente(props) {
//   return <h2>{props.msg}</h2>;
// }

// CON CLASES********
// class Componente extends Component {
//   render() {
//     return <h2>{this.props.msg}</h2>;
//   }
// }

export default Componente;
