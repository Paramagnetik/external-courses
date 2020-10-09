function checkV(str, obj) {
    let newObj = obj;

    if (str in newObj) {
        return newObj;
    }

    return (newObj[str] = 'new');
}

module.exports = checkV;
