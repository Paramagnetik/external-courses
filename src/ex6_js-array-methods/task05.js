function map(array, callback) {
    let arr = [];

    for (let i = 0; i < array.length; i++) {
        let item = array[i];

        if (callback(item, i, array)) {
            arr.push(callback(item));
        }
    }

    return arr;
}

module.exports = map;
