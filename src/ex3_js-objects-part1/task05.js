function object (obj) {
    let copyObj = {};
    Object.assign(copyObj, obj);
    return copyObj;
};

module.exports = object;