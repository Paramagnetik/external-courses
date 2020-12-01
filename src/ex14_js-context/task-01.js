let calculator = {
    result: 0,

    setState(number = this.result) {
        this.result = number;
        return this;
    },

    fetchData(callback) {
        setTimeout(() => {
            callback(value).bind(calculator);
        }
            , 1000);
    },

    getResult() {
        return this.result;
    },

    reset() {
        this.result = 0;
        return this;
    },

    add(number = 0) {
        this.result += number;
        return this;
    },

    subtract(number = 0) {
        this.result -= number;
        return this;
    },

    divide(number = 1) {
        this.result /= number;
        return this;
    },

    multiply(number = 0) {
        this.result *= number;
        return this;
    },
}

calculator.fetchData(calculator.setState(500))
calculator.getResult()
module.exports = calculator;
