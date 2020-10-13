function objCopy(obj) {
    let objClone = {}

    for (let key in obj) {
        if (Array.isArray(obj[key])) {
            obj[key].forEach(item => {
                if (typeof item === 'object') {
                    objClone[key] = [objCopy(item)];
                } else {
                    objClone[key] = obj[key];
                }
            })
        } else if (obj[key] !== Array.isArray(obj[key]) && typeof obj[key] === 'object') {
            objClone[key] = objCopy(obj[key]);
        } else {
            objClone[key] = obj[key];
        }
    }

    return objClone;
}

module.exports = objCopy;
