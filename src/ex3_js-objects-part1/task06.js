function objCopy(obj) {
    let objClone = {}

    for (let key in obj) {
        if (Array.isArray(obj[key])) {
            objClone[key] = [...obj[key]];
        } else if (obj[key] !== Array.isArray(obj[key]) && typeof obj[key] === 'object') {
            objClone[key] = objCopy(obj[key]);
        } else {
            objClone[key] = obj[key];
        }
    }

    return objClone;
}

module.exports = objCopy;
