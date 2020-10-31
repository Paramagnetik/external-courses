function slice(array, begin, end) {
    let arr = [];
    let oneElem = begin;
    let lastElem = end;

    if (oneElem < 0) {
        oneElem = array.length + oneElem;
    }

    if (lastElem < 0) {
        lastElem = array.length + lastElem;
    }

    for (let i = oneElem; i < lastElem; i++) {
            arr.push(array[i]);
    }

    return arr;
}

module.exports = slice;
