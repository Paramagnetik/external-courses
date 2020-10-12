function symbolOfString(str) {
    let obj = {};

    for (let key of str) {
        obj[key] = str.split(key).length - 1;
    }

    for (let i in obj) {
        console.log(`${i}:${obj[i]}`)
    }
}
module.exports = symbolOfString;