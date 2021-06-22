import React from 'react';
import Calculator from './containers/calculator';
import './app.css';

// criando um componente usando funções e não classe
export function App() {
  return (
    <div className="screen">
      <div />
      <Calculator />
      <div />
    </div>
  );
}
