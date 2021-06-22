// mostra alguma informação
import React, { Component } from 'react';

// criando a class display
class Display extends Component {
  // metodo rende diz tudo que vai acontecer, renderizar
  // propriedade que recebe nessa classe (this.props.value)
  // retornando o html e javascript (return)
  render() {
    return <div className={'display'}>{this.props.value}</div>;
  }
}

export default Display;
