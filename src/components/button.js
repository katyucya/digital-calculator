// função de receber uma propriedade, um clique e fazer algo
import React, { Component } from 'react';
// props é uma propriedade
export class Button extends Component {
  handleClick() {
    const { disabled, onClick } = this.props;
    // se existe onClick execute
    if (onClick && !disabled) {
      // execute meu onClick
      this.props.onClick();
    }
  }
  // função da classe por isso colocar o this.handleClick
  // esta ligando o this com o da classe
  render() {
    const cssButtonClass = this.props.disabled ? 'button disabled' : 'button';
    return (
      <div className={cssButtonClass} onClick={this.handleClick.bind(this)}>
        {this.props.display}
      </div>
    );
  }
}
