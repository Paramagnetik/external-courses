function checkValue(str, obj) {
    if (obj.hasOwnProperty(str)) {
        return true;
    }

    return false;
}

module.exports = checkValue;
