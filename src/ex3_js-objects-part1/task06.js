function objCopy(obj) {
    let objClone = {};
    for (let key in obj) {
        if (Array.isArray(obj)) {
            objClone[key] = objCopy(obj[key]);
        } else {
            objClone[key] = obj[key];
        }
    }

    return objClone;
};

module.exports = objCopy;