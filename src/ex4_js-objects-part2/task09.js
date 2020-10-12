function takesString (str1, str2, num) {
    let arr = str1.split(' ');

    arr.splice(num+1, 0, str2);
    
    return arr.join(' ');
    }

module.exports = takesString;
