import React, { PureComponent } from 'react';
import CounterContainer from './components/counter/index'
import { createStore } from 'redux';

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
    default: return state
  }
}

const store = createStore(counter);

class App extends PureComponent {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CounterContainer store={store}/>
        </header>
      </div>
    )
  }
}

export default App;
