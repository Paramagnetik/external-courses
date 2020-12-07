function Hangman(word) {
    this.wordCase = word.toLowerCase().split("");
    this.error = 6;
    this.words = [];
    this.arrError = [];

    for (let i = 0; i < this.wordCase.length; i++) {
        this.words.push('_');
    }

    this.getGuessedString = function () {
        return this.words.join("");
    }

    this.getErrorsLeft = function () {
        return this.error;
    }

    this.getWrongSymbols = function () {
        return this.arrError;
    }

    this.getStatus = function () {
        console.log(`${this.words.join("")} | errors left ${this.error}`);

        return this;
    }

    this.guess = function (letter) {
        this.letteCase = letter.toLowerCase();

        if (this.error < 2) {
            console.log("You lose");

            return this;
        }

        if (this.wordCase.indexOf(this.letteCase) !== -1) {

            this.words = this.wordCase.map(function (el, i) {

                if (this.letteCase === el) {
                    return this.letteCase;
                }

                return this.words[i];
            }, this);

        } else {
            this.arrError.push(this.letteCase);
            console.log(`wrong letter, errors left ${this.error -= 1} | ${this.arrError.join(',')}`);

            return this;
        }

        if (this.words.join("") === this.wordCase.join("")) {
            console.log(this.words.join(""), "| You won!");
        } else {
            return this.words.join("");
        }

        return this;
    }

    this.startAgain = function (newLetter) {
        this.wordCase = newLetter.toLowerCase().split("");
        this.error = 6;
        this.words = [];
        this.arrError = [];

        for (let i = 0; i < this.wordCase.length; i++) {
            this.words.push('_');
        }

        return this;
    }

    return this;
}

let hangman = new Hangman("webpurple");

module.exports = hangman;
