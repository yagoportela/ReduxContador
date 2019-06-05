import React, { PureComponent } from 'react'
import Counter from './counter'

class CounterContainer extends PureComponent {

    constructor() {
        super();
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment = () => {
        this.props.store.dispatch({ type: 'INCREMENT' })
    }

    decrement = () => {
        this.props.store.dispatch({ type: 'DECREMENT' })
    }

    componentDidMount(){
        this.props.store.subscribe(() => this.forceUpdate())
    }

    render() {
        return (
            <Counter counter={this.props.store.getState()} increment={this.increment} decrement={this.decrement} />
        )
    }


}

export default CounterContainer;