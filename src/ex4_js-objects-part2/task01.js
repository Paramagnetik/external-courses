function prototypeObject(values, obj) {
   return Object.getPrototypeOf(obj)[values];
}

module.exports = prototypeObject;
