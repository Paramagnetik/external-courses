function feth(method, url, file) {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.onload = function () {
            if (xhr.status != 200) {
                reject(console.log("Error"));
            } else {
                resolve(console.log(this.response));
            }
        };

        xhr.send(file);
    })
};
