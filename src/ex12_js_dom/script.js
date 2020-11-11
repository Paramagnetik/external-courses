let slides = document.querySelectorAll(".image");
let slider = [];
for (let i = 0; i < slides.length; i++) {
    slider[i] = slides[i].src;
    slides[i].remove();
}

let next = 0;
function moveRight() {
    next++;
    if (next == slider.length) {
        next = 0;
    }

    let img = document.createElement("img");
    let imageNumber = document.getElementsByClassName("image").length;
    const firstUl = document.getElementById("slider");

    img.src = slider[next];
    img.classList.add("image");
    document.querySelector("#slider").appendChild(img);

    setTimeout(() => img.classList.add("animate-right"), 0);

    setTimeout(() => {
        if (imageNumber > 2) {
            firstUl.removeChild(firstUl.firstChild);
        }
    }, 0);
}

function moveLeft() {
    next--;
    if (next < 0) {
        next = slider.length + next;
    }

    let img = document.createElement("img");
    let imageNumber = document.getElementsByClassName("image").length;
    const firstUl = document.getElementById("slider");

    img.src = slider[next];
    img.classList.add("image");
    document.querySelector("#slider").appendChild(img);

    setTimeout(() => img.classList.add("animate-left"), 0);

    setTimeout(function () {
        if (imageNumber > 2) {
            firstUl.removeChild(firstUl.firstChild);
        }
    }, 1000);
}

moveRight()
