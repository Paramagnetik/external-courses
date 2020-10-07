function checkV(str, obj) {
    for (let key in obj) {
        if (str in obj) {
            return obj;
        }
    }
    object[str] = 'new';
    return obj;
};

module.exports = checkV;
