import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <section>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </section>
        <section>
          <Componente msg='Hola soy un Componente desde una prop funcional expresado desde una prpr' />
          <hr />
          <Propiedades
            cadena='Esto es una cadena de texto'
            booleano={true}
            numero={2}
            array={[1, 2, 3]}
            objeto={{ nombre: 'Vicente', correo: 'vince@gmail.com' }}
            funcion={num => num * num}
            elementoReact={<i>Esto es un elemeno React </i>}
            componenteReact={
              <Componente msg='Soy un componente pasado como Prop' />
            }
          />
          <hr />
          <Estado />
          <hr />
          <RenderizadoCondicional />
          <hr />
          <RenderizadoElementos />
        </section>
      </header>
    </div>
  );
}

export default App;
