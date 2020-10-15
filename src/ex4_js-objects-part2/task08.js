function lowerString(str) {
    let arr = str.split(' ');
    let newArr = [];
    
    for (let key of arr) {
        newArr += key[0].toUpperCase() + key.slice(1).toLowerCase();
    }

    return newArr[0].toLowerCase() + newArr.slice(1);
}

module.exports = lowerString;
