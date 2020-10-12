function string (str, num) {
    let newStr
    if (str.length > num) {
        let ellips = '…'
        let x = str.length - num;
        newStr = str.substring(0, str.length - x -1) + ellips  
    }
    return newStr;
}

module.exports = string;
