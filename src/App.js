import React, { Component } from 'react';
import {Link} from 'react-router';

export class App extends Component {
  render() {
    return (
      <div>
        <nav>
          {/* Aca deben ir los links de navegacion */}
          <Link to='page1'>Page 1</Link>
          <Link to='page2'>Page 2</Link>
        </nav>
        {/* Aca tienes que agregar algo para que las rutas funcionen*/}
        {this.props.children}
      </div>
    )
  }
}

// No tienes que hacer nada por debajo de esta línea
//==================================================


export const Page1 = (props) => {
  return (
    <h1>Pagina 1</h1>
  )
}

export const Page2 = (props) => {
  return (
    <h1>Pagina 2</h1>
  )
}

export const NotFound = (props) => {
  return (
    <h1>Pagina no encontrada</h1>
  )
}
