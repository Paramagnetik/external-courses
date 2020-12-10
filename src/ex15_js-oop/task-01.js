function Sweetness(name, weight) {
    this.name = name;
    this.weight = weight;
}

function Present(sweetness) {
    this.sweetness = sweetness;
}

Present.prototype.sumWeight = function () {
    return this.sweetness.reduce((accumulator, sweetness) => accumulator + sweetness.weight, 0);
}

Present.prototype.sorting = function () {
    return this.sweetness.sort((a, b) =>
        a.weight - b.weight
    );
}

Present.prototype.findName = function (name) {
    return this.sweetness.find((sweet) =>
        sweet.name === name)
}

const mars = new Sweetness("Mars", 50);
const snickers = new Sweetness("Snickers", 40);
const milkyWay = new Sweetness("MilkyWay", 40);
const sweet = new Present([mars, snickers, milkyWay]);
