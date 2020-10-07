function objCopy(obj) {
    let objClone = {}
    
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            objClone[key] = objCopy(obj[key]);
        } else {
            objClone[key] = obj[key];
        }
    }

    return objClone;
};

module.exports = objCopy;
