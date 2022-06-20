import Reacr, { Component } from 'react';

function Login() {
  return (
    <div>
      <h3>Login</h3>
    </div>
  );
}

function Logout() {
  return (
    <div>
      <h3>Logout</h3>
    </div>
  );
}
//Crear una variable de estado al componente Clase, y en función del valor de la variable, vamos a mostrar Login o Logout

export default class RenderizadoCondicional extends Component {
  //vamos a hacer que cuando la variable session sea true, nos renderice(muestre) el componente Login
  constructor(props) {
    super(props);
    this.state = {
      session: true,
    };
  }
  render() {
    return (
      <div>
        <h2>Renderizado Condicional</h2>
        {this.state.session ? <Login /> : <Logout />}
      </div>
    );
  }
}
