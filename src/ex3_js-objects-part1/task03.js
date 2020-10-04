function checkValue(str, obj) {
    let keys = (`${[str]}`);
    for (let key in obj) {
        if (keys === key) {
            return true;
        }
    }

    return false;
};

module.exports = checkValue;
