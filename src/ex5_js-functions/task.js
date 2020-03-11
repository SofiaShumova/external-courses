const Calculator = {
  result: 0,
  add: function(x = 0) {
    Calculator.result += x
    return Calculator.add
  },
  subtract: function(x = 0) {
    Calculator.result -= x
    return Calculator.subtract
  },
  divide: function(x = 1) {
    Calculator.result /= x
    return Calculator.divide
  },
  multiply: function(x = 1) {
    Calculator.result *= x
    return Calculator.multiply
  },
  getResult: function() {
    return this.result
  },
  reset: function() {
    return Calculator.result = 0
  }
}
module.exports = Calculator