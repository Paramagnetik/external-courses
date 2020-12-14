const mock = [
    { name: "Вася" },
    { name: "Петя" },
    { name: "Маша" }
];

function debounce(callback, ms) {
    let timeout;

    return function (argument) {
        clearTimeout(timeout);
        timeout = setTimeout(callback, ms, argument);
    };
};

function serch(elem) {
    return mock.find((item) => {
        if (item.name === elem.target.value) {
            console.log(elem.target.value);
        }
    })
};

let inputSearch = document.getElementById("search");

inputSearch.addEventListener("change", debounce(serch, 1000));
