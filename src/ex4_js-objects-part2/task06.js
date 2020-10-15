function stringUp(str) {
    let arr = str.split(' ');
    let newArr = [];
    
    for (let key of arr) {
        newArr += key[0].toUpperCase() + key.slice(1) + ' ';
    }

    return newArr;
}

module.exports = stringUp;
