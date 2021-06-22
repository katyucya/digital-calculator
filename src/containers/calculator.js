// criando a calculadora

import { Component } from 'react';
import { Button } from '../components/button';
import Display from '../components/display';

class Calculator extends Component {
  // criando o estado da aplicação, fazendo um construtor
  initialState = {
    firstValue: 0,
    secondValue: 0,
    operator: 1,
    isSum: false,
    isDiv: false,
  };
  constructor(props) {
    super(props);
    this.state = this.initialState;
  }
  putValue = (value) => {
    const lastValue =
      this.state.operator === 1
        ? this.state.firstValue
        : this.state.secondValue;
    switch (this.state.operator) {
      case 1:
        this.setState({ firstValue: lastValue * 10 + value });
        break;
      case 2:
        this.setState({ secondValue: lastValue * 10 + value });
        break;
      default:
        break;
    }
  };
  getValue = () => {
    const { firstValue, secondValue, op, operator } = this.state;
    switch (operator) {
      case 1:
        return firstValue;
      case 2:
        return secondValue;
      case 3:
        switch (op) {
          case 1:
            return firstValue + secondValue;
          case 2:
            return firstValue - secondValue;
          case 3:
            return firstValue / secondValue;
          case 4:
            return firstValue * secondValue;
          case 5:
            return Math.pow(firstValue, secondValue);
          default:
            return 0;
        }

      default:
        return 0;
    }
  };

  pickOperation = (op) => {
    this.setState({ operator: 2, op });
  };
  execOperation = () => {
    this.setState({ operator: 3 });
  };
  clear = () => {
    this.setState(this.initialState);
  };
  render() {
    const { operator } = this.state;
    return (
      <div className={'calculator'}>
        <div>
          <Display value={this.getValue()} />
        </div>
        <div className={'buttonsConteiner'}>
          <Button display={'C'} onClick={() => this.clear()} />
          <Button
            display={'*'}
            onClick={() => this.pickOperation(4)}
            disabled={operator !== 1}
          />
          <Button
            display={'/'}
            onClick={() => this.pickOperation(3)}
            disabled={operator !== 1}
          />
          <Button
            display={'-'}
            onClick={() => this.pickOperation(2)}
            disabled={operator !== 1}
          />
          <Button
            display={'1'}
            onClick={() => this.putValue(1)}
            disabled={operator === 3}
          />
          <Button
            display={'2'}
            onClick={() => this.putValue(2)}
            disabled={operator === 3}
          />
          <Button
            display={'3'}
            onClick={() => this.putValue(3)}
            disabled={operator === 3}
          />
          <Button
            display={'+'}
            onClick={() => this.pickOperation(1)}
            disabled={operator !== 1}
          />
          <Button
            display={'4'}
            onClick={() => this.putValue(4)}
            disabled={operator === 3}
          />
          <Button
            display={'5'}
            onClick={() => this.putValue(5)}
            disabled={operator === 3}
          />
          <Button
            display={'6'}
            onClick={() => this.putValue(6)}
            disabled={operator === 3}
          />
          <Button
            display={'**'}
            onClick={() => this.pickOperation(5)}
            disabled={operator !== 1}
          />
          <Button
            display={'7'}
            onClick={() => this.putValue(7)}
            disabled={operator === 3}
          />
          <Button
            display={'8'}
            onClick={() => this.putValue(8)}
            disabled={operator === 3}
          />
          <Button
            display={'9'}
            onClick={() => this.putValue(9)}
            disabled={operator === 3}
          />
          <Button
            display={'0'}
            onClick={() => this.putValue(0)}
            disabled={operator === 3}
          />
          <Button
            display={'='}
            onClick={() => this.execOperation()}
            disabled={operator === 1}
          />
        </div>
      </div>
    );
  }
}

export default Calculator;
