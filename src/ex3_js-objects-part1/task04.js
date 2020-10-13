 function checkV(str, obj) {
    let newObj = obj;

    if (!(str in newObj)) {
        newObj[str] = 'new'
        return newObj;
    }

    return newObj;
}

module.exports = checkV;
