import React, { PureComponent } from 'react';
import CounterContainer from './components/counter/index'
import { createStore } from 'redux';
import Counters from './redux-flow/reducers/counters'

const store = createStore(Counters);

class App extends PureComponent {

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
