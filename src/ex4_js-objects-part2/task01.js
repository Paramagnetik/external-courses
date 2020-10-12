function prototypeObject (values, obj) {
   let key = Object.getPrototypeOf(obj)
   
   return key[values];
}

module.exports = prototypeObject;
