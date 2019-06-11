import { CounterComponente} from './index'
import {expect} from 'chai'


it("Counter deve ser uma função", () => {
    expect(CounterComponente).to.be.a('function')
})
