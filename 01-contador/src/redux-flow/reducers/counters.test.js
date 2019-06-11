import Counters, {Value_Initial} from './counters'
import {ADD_COUNTER, 
        REMOVE_COUNTER, 
        INCREMENT, 
        DECREMENT } from './actions'
import { expect } from 'chai'

//Function
it("Counter deve ser uma função functio", () => {
    expect(Counters).to.be.a('function')
})

//Adicionando
it("Adicionando um novo Counter", () => {
    const before = [];
    const after = [0];
    const action = {type: ADD_COUNTER}

    expect(Counters(before, action)).to.be.deep.equal(after)
})

it("Saidas diferentes do esperado", () => {
    const before = [0, 1];
    const after = [0, 1, 0];
    const action = { type: ADD_COUNTER };

    expect(Counters(before, action)).to.be.deep.equal(after)
})

//Removendo
it("Remover contador 1", () => {
    const before = [0, 1, 0];
    const after = [0, 0];
    const action = {type: REMOVE_COUNTER, indice: 1}

    expect(Counters(before, action)).to.be.deep.equal(after)
})

it("Remover contador 2", () => {
    const before = [0, 1, 0];
    const after = [1, 0];
    const action = { type: REMOVE_COUNTER, indice: 0 }

    expect(Counters(before, action)).to.be.deep.equal(after)
})

//Increment
it("Teste Increment", () => {
    const before = [0, 1];
    const after = [1, 1];
    const action = { type: INCREMENT, indice: 0 }

    expect(Counters(before, action)).to.be.deep.equal(after)
})

it("Teste Increment Outro Contador", () => {
    const before = [0, 1];
    const after = [0, 2];
    const action = { type: INCREMENT, indice: 1 }

    expect(Counters(before, action)).to.be.deep.equal(after)
})

//Decrement
it("Teste Decrement", () => {
    const before = [0, 2];
    const after = [0, 1];
    const action = { type: DECREMENT, indice: 1 }

    expect(Counters(before, action)).to.be.deep.equal(after)
})

it("Teste Decrement outro contador", () => {
    const before = [1, 1];
    const after = [0, 1];
    const action = { type: DECREMENT, indice: 0 }

    expect(Counters(before, action)).to.be.deep.equal(after)
})


//Caminho triste

//type
it("Teste Action Type", () => {
    const before = [0, 1]
    const after = [0, 1]
    const action = { type: 'undefined', indice: 0 }

    expect(Counters(before, action)).to.be.deep.equal(after)
})

it("Teste Outro Action Type", () => {
    const before = []
    const after = []
    const action = { type: 'undefined', indice: 0 }

    expect(Counters(before, action)).to.be.deep.equal(after)
})

//indice
it("Teste Action indice", () => {
    const before = [0, 1]
    const after = [0, 1]
    const action = { type: 'Undefined', indice: undefined }

    expect(Counters(before, action)).to.be.deep.equal(after)
})

it("Teste Outro Action indice", () => {
    const before = []
    const after = []
    const action = { type: 'Undefined', indice: undefined }

    expect(Counters(before, action)).to.be.deep.equal(after)
})

//before
it("Teste before undefined", () => {
    const before = undefined
    const after = Value_Initial
    const action = { type: 'DECREMENT', indice: 0 }

    expect(Counters(before, action)).to.be.deep.equal(after)
})