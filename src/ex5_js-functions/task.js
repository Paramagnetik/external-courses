class Calculator {

    constructor() {
        this.result = 0;

        getResult = () => {
            
            return this.result;
        }

        reset = () => {
            this.result = 0;
        }

        add = (number = 0) => {
            this.result += number;

            return this.add;
        }

        subtract = (number = 0) => {
            this.result -= number;

            return this.subtract;
        }

        divide = (number = 1) => {
            this.result /= number;

            return this.divide;
        }

        multiply = (number = 1) => {
            this.result *= number;

            return this.multiply;
        }
    }
}

module.exports = new Calculator();
