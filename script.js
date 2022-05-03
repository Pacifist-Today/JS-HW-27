"use strict"

const calculation = () => {
    let i = 0
    let count = 0
    const increase = () => {
        i++
        count++
    }
    const decrease = () => {
        i--
        count++
    }
    const getStatistic = () => {
      return count
    }
    const reset = () => {
        return count = 0, i = 0
    }
    const value = () => {
        return i
    }
    return {
        increase,
        decrease,
        getStatistic,
        reset,
        value
    }
}

let Calculator1 = calculation()
let Calculator2 = calculation()
Calculator1.increase()
Calculator1.increase()
Calculator1.increase()
Calculator1.decrease()
console.log(Calculator1.value()) //2
console.log(Calculator1.getStatistic()) //4
console.log(Calculator1.reset()) //0,0
Calculator2.increase() // Calculator 2
Calculator1.increase()
Calculator1.increase()
Calculator1.increase()
Calculator1.decrease()
console.log(Calculator1.value()) //2
console.log(Calculator1.getStatistic()) //4
Calculator2.increase()
Calculator2.increase()
Calculator2.increase()
Calculator2.decrease()
console.log(Calculator2.value()) //3
console.log(Calculator2.getStatistic()) //5