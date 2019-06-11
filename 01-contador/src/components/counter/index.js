import React from 'react'
import { connect } from 'react-redux'
import Counter from './counter'
import { addCounter, increment, decrement, removeCounter } from '../../redux-flow/reducers/action-creators'

export const CounterComponente = ({ counters, addCounter, increment, decrement, removeCounter }) => (
    <div>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            {counters.map((counter, index) => {
                return (<Counter key={index} counter={counter} increment={increment(index)} decrement={decrement(index)} removeCounter={removeCounter(index)}/>)
            })}
        </div>
        <div>
            <button onClick={addCounter} style={{ display: 'flex', justifyContent: 'center',  width: '100%', marginTop: '10%'}}>Adicionar counter</button>
        </div>
    </div>
)

const mapStateToProps = (state) => ({ counters: state })

const mapDispatchToProps = (dispatch) => ({
    addCounter: () => dispatch(addCounter()),
    removeCounter: (index) => () => dispatch(removeCounter(index)),
    increment: (index) => ()=> dispatch(increment(index)),
    decrement: (index) => () => dispatch(decrement(index)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponente);