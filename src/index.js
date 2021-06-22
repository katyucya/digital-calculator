import React from 'react';
import ReactDom from 'react-dom';
import { App } from './App';
import './index.css';

ReactDom.render(
  // criando nossa app
  <App />,
  // pegando o elemento
  document.getElementById('root')
);
