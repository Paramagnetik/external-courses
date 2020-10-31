class Calculator {

    constructor() {
        this.result = 0;

        this.getResult = () => {

            return this.result;
        }

        this.reset = () => {
            this.result = 0;
        }

        this.add = (number = 0) => {
            this.result += number;

            return this.add;
        }

        this.subtract = (number = 0) => {
            this.result -= number;

            return this.subtract;
        }

        this.divide = (number = 1) => {
            this.result /= number;

            return this.divide;
        }

        this.multiply = (number = 1) => {
            this.result *= number;

            return this.multiply;
        }
    }
}

module.exports = new Calculator();
