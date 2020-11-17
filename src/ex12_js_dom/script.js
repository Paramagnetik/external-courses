let slides = document.querySelectorAll('.image');
let slider = [];
for (let i = 0; i < slides.length; i++) {
    slider[i] = slides[i].src;
    slides[i].remove();
}

let next = 0;

function moveRight() {
    next++;
    if (next === slider.length) {
        next = 0;
    } 

    let img = document.createElement('img');
    const firstUl = document.getElementById('slider');
    
    img.src = slider[next];
    img.classList.add('image');
    img.classList.add('animate-right');
    document.querySelector('#slider').appendChild(img);

    if (document.getElementsByClassName('image').length > 2) {
        firstUl.removeChild(firstUl.firstElementChild);
    }

    firstUl.firstElementChild.className = 'image right-animate';
    ;
}

function moveLeft() {
    next--;
    if (next < 0) {
        next = slider.length + next;
    }

    let img = document.createElement('img');
    const firstUl = document.getElementById('slider');

    img.src = slider[next];
    img.classList.add('image');
    img.classList.add('animate-left')
    document.querySelector('#slider').appendChild(img);

    if (document.getElementsByClassName('image').length > 2) {
        firstUl.removeChild(firstUl.firstElementChild);
    }

    firstUl.firstElementChild.className = 'image left-animate';
}

moveLeft();
