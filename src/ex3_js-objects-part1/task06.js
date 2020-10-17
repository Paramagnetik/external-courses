function objCopy(obj) {
    let objClone = {};

    for (let key in obj) {
        if (Array.isArray(obj[key])) {
            let arrayCopy = [];

            obj[key].forEach(item => {
                arrayCopy.push(objCopy(item));
            })

            objClone[key] = arrayCopy;
        } else if (typeof obj[key] === 'object') {
            objClone[key] = objCopy(obj[key]);
        } else {
            objClone[key] = obj[key];
        }
    }

    return objClone;
}

module.exports = objCopy;
