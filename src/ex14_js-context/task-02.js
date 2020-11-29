function Hangman(word) {
    this.wordCase = word.toLowerCase();
    this.error = 6;
    this.words = [];
    this.arrError = [];

    this.getGuessedString = function () {
        if (this.words.length) {
            return this.words.join("");
        }

        return "_".repeat(word.length);
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

            for (let i = 0; i < this.wordCase.length; i++) {
                if (this.words[i] === "_" && this.letteCase === this.wordCase[i]) {
                    this.words[i] = this.letteCase;
                } else {
                    if (this.letteCase === this.wordCase[i]) {
                        this.words[i] = this.letteCase;
                    }

                    if (typeof this.words[i] === "string") {
                    }
                    else {
                        this.words[i] = "_";
                    }
                }
            }

            if (this.words.join("") === this.wordCase) {

                return console.log(`${this.words.join("")} | You won!`);
            }
            console.log(this.words.join(""));

            return this;

        } 
            this.arrError.push(this.letteCase);
            console.log(`wrong letter, errors left ${this.error -= 1} | ${this.arrError.join(',')}`);

            return this;
        
    }

    this.startAgain = function (newLetter) {
        this.wordCase = newLetter.toLowerCase();
        this.error = 6;
        this.words = [];
        this.arrError = [];

        return this;
    }

    return this;
}

let hangman = new Hangman("webpurple");

module.exports = hangman;
