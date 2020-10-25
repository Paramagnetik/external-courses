function slice(array, begin, end) {
    let arr = [];

    if (begin && end >= 0) {
        for (let i = [begin]; i < end; i++) {
            arr.push(array[i]);
        }
    }

    if (begin === undefined && end === undefined) {
        for (let i = 0; i < array.length; i++) {
            arr.push(array[i]);
        }
    }

    if (begin && end === undefined) {
        for (let i = [begin]; i < array.length; i++) {
            arr.push(array[i]);
        }
    }

    if (begin && end < 0) {
        for (let i = array.length + begin; i < array.length + end; i++) {
            arr.push(array[i]);
        }
    }

    if (begin < 0 && end >= 0) {
        for (let i = array.length + begin; i < end; i++) {
            arr.push(array[i]);
        }
    }

    if (begin >= 0 && end < 0) {
        for (let i = [begin]; i < array.length + end; i++) {
            arr.push(array[i]);
        }
    }

    return arr;
}

module.exports = slice;
