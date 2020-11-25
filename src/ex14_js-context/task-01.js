let calculator = {
    result: 0,

    setState(number) {
        this.result = number;
        return this;
    },

    fetchData() {
        setTimeout(() => {
            this.result = 500;
        }, 1000);
    },

    getResult() {
        return this.result;
    },

    reset() {
        this.result = 0;
        return this;
    },

    add(number) {
        this.result += number;
        return this;
    },

    subtract(number) {
        this.result -= number;
        return this;
    },

    divide(number) {
        this.result *= number;
        return this;
    },

    multiply(number) {
        this.result /= number;
        return this;
    },
}

module.exports = calculator;
