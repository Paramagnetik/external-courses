function string(str, num) {
    let lineLength;

    if (str.length > num) {
        lineLength = str.length - num;
    } 
    
    return (str.substring(0, str.length - lineLength - 1) + '…');
}

module.exports = string;
