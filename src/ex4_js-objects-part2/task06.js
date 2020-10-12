function stringUp(str) {
    let arr = str.split(' ');
    let newArr = [];
    let newStr = '';
    
    for (let key of arr) {
        newArr = key[0].toUpperCase() + key.slice(1);
        newStr += newArr + ' '
    }

    return newStr;
}

module.exports = stringUp;