const arrow = document.getElementById('arrow');
const createMenu = document.getElementById('createMenu');
const userMenu = document.getElementById('userMenu');
const dropMenuUl = document.createElement('ul');
const dropMenuLiOne = document.createElement('li');
const dropMenuLiTwo = document.createElement('li');
const dropMenuLiThree = document.createElement('li');

dropMenuLiOne.innerText = "My account";
dropMenuLiTwo.innerText = "My tasks";
dropMenuLiThree.innerText = "Log out";
[dropMenuLiOne, dropMenuLiTwo, dropMenuLiThree].forEach(item => dropMenuUl.appendChild(item));

const insertMenu = () => {
    createMenu.appendChild(dropMenuUl).classList.add('arrow-ul');
    arrow.classList.add('arrowUp');
};
const deleteMenu = () => {
    dropMenuUl.remove();
    arrow.classList.remove('arrowUp');
};

userMenu.addEventListener('click', () => {
    if (arrow.classList.contains('arrowUp')) {
        deleteMenu();
    } else {
        insertMenu();
    }
})

document.addEventListener('click', (event) => {
    const isUserMenuClick = userMenu.contains(event.target);
    const isDropMenuUlClick = dropMenuUl.contains(event.target);

    if (!isUserMenuClick && !isDropMenuUlClick) {
        deleteMenu();
    }
})
