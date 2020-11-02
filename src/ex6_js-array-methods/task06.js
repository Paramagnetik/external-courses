function reduce(array, callback, initialValue) {
    let i = 1;
    let previousValue = array[0];
  
    if (initialValue !== undefined) {
      previousValue = initialValue;
      i = 0;
    }

    for(i; i < array.length; i++) {
        previousValue = callback(previousValue, array[i], i, array)
    }
    
    return previousValue;
}

module.exports = reduce;
