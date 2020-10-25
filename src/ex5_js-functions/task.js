    let calculator = {
        result: 0,

        getResult: function () {
            return this.result;
        },

        reset: function () {
            this.result = 0;
        },

        add: function (number = 0) {
            this.result += number;
            return this.add.bind(this);
        },

        subtract: function (number = 0) {
            this.result -= number;
            return this.subtract.bind(this);
        },

        divide: function (number = 1) {
            this.result /= number;
            return this.divide.bind(this);
        },

        multiply: function (number = 1) {
            this.result *= number;
            return this.multiply.bind(this);
        },
    }
