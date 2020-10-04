function checkV(str, obj) {
    let keys = (`${[str]}`);
    let object = obj;

    for (let key in obj) {
        if (keys === key) {
            return obj;
        }
    }
    object[keys] = 'new';
    return object;
};

module.exports = checkV;
