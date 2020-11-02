function slice(array, begin = 0, end = array.length) {
    let arr = [];
    let firstElem = begin;
    let lastElem = end;

    if (firstElem < 0) {
        firstElem = array.length + firstElem;
    }

    if (lastElem < 0) {
        lastElem = array.length + lastElem;
    }

    for (let i = firstElem; i < lastElem; i++) {
        if (array[i] == undefined) {
            continue;
        }
        arr.push(array[i]);
    }

    return arr;
}

module.exports = slice;
