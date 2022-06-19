import React, { Component } from 'react';

//HIJO
function EstadoAHijo(props) {
  return (
    <div>
      <h3>{props.contadorHijo}</h3>
    </div>
  );
}
//PADRE MIN 17 IMPORTANTE Un componente hijo al ser funcional y no utilizar Hooks, los componentes funcionales no pueden tener estado. EL estado dle padre se le pasó como propiedad al componente Hijo. Cada vez que un componente recibe una propiedad, y esa propiedad modifica su estado. También va  agenerar el renderizado del pintado en pantalla.

export class Estado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    setInterval(() => {
      this.setState({ contador: this.state.contador + 1 });
    }, 1000);
  }
  render() {
    return (
      <div>
        <h2>EL Estado</h2>
        <p>{this.state.contador}</p>
        <EstadoAHijo contadorHijo={this.state.contador} />
      </div>
    );
  }
}

export default Estado;
