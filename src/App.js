import React from 'react';
import Screen from './components/screen.js';
import Keys from './components/keys.js';
import ReactDOM from 'react-dom';

class Calculator extends React.Component {
    constructor() {
      super();
      this.state = {
        inp: '',
        out: '',
      }
    
      this.click = this.click.bind(this);
    }

    clicker(event) {
      const value = event.target.value;
    
      switch (value) {
        case '=': {
          if (this.state.question!=='') {
              var ans='';
              this.setState({ answer: ans , question: ''});
          }
        }
        case 'CLR': {
          this.setState({ question: '', answer: '' });
          break;
        }
        default: {
            this.setState({ question: this.state.question += value})
            break;
        }
      }
    }
    render()
    {
    return (
      <div className="frame">
      <div class="CALC">
      <Screen/>
      <div className="keys2">
        <Keys label={'7'}/>
        <Keys label={'8'}/>
        <Keys label={'9'}/>
        <Keys label={'+'}/>
      </div>
      <div className="keys2">
        <Keys label={'4'}/>
        <Keys label={'5'}/>
        <Keys label={'6'}/>
        <Keys label={'-'}/>
      </div>
      <div className="keys2">
        <Keys label={'1'}/>
        <Keys label={'2'}/>
        <Keys label={'3'}/>
        <Keys label={'*'}/>
      </div>
      <div className="keys2">
        <Keys label={'0'}/>
        <Keys label={'CLR'}/>
        <Keys label={'/'}/>
        <Keys label={'='}/>
      </div>
      </div>
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById('root'));

export default Calculator;