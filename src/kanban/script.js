// add drop-down menu
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

// add Task to list

const buttonAddBackloge = document.querySelector('#buttonAddBackloge');
const buttonAddReady = document.querySelector('#buttonAddReady');
const buttonAddInProgress = document.querySelector('#buttonAddInProgress');
const buttonAddFinished = document.querySelector('#buttonAddFinished');
let arrayListLiBackloge = Array.from(document.querySelector('#listLiBackloge').children);

buttonAddBackloge.addEventListener('click', () => {
    const input = document.createElement('input');

    if (input.classList.contains('create-task-input')) {
        input.remove();
    } else {
        buttonAddBackloge.parentElement.insertBefore(input, buttonAddBackloge).classList.add('create-task-input');
        input.value = '';
        input.addEventListener('blur', () => {

            if (input.value === '') {
                input.remove();

            } else {
                const createElemLi = document.createElement('li');
                const appendElemLi = document.querySelector('#listLiBackloge').appendChild(createElemLi);

                appendElemLi.innerText = input.value;
                input.remove();

                if (Array.from(document.querySelector('#listLiBackloge').children).length) {
                    buttonAddReady.disabled = false;
                }
            }
        })
    }

    document.addEventListener('click', (event) => {
        const isInputClick = document.querySelector('.list-Backloge').contains(event.target);
        let inputLength = Array.from(document.querySelectorAll('input')).length;

        if (!isInputClick) {
            input.remove();
        }

        if (inputLength > 1) {
            input.remove();
        }
    })
})

buttonAddReady.addEventListener('click', () => {
    const selectReady = document.createElement('ul');
    let arrayListLiBackloge = Array.from(document.querySelector('#listLiBackloge').children);
    let arrayListLiReadyBackloge;

    for (let i = 0; i <= arrayListLiBackloge.length - 1; i++) {
        arrayListLiReadyBackloge = document.createElement('li');
        arrayListLiReadyBackloge.innerText = arrayListLiBackloge[i].innerText;
        selectReady.appendChild(arrayListLiReadyBackloge);
    }

    if (selectReady.classList.contains('create-task-select')) {
        selectReady.remove();
    } else {
        buttonAddReady.parentElement.insertBefore(selectReady, buttonAddReady).classList.add('create-task-select');

        selectReady.childNodes.forEach(li => {
            li.addEventListener('click', () => {
                const createElemLiReady = document.createElement('li');
                const appendElemLiReady = document.querySelector('#listLiReady').appendChild(createElemLiReady);
                appendElemLiReady.innerText = li.innerText;
                li.remove();

                for (let i = 0; i <= arrayListLiBackloge.length - 1; i++) {
                    if (arrayListLiBackloge[i].innerText == appendElemLiReady.innerText) {
                        arrayListLiBackloge[i].remove();

                        if (Array.from(document.querySelector('#listLiReady').children).length) {
                            buttonAddInProgress.disabled = false;
                        }

                        if (Array.from(document.querySelector('#listLiBackloge').children).length) {
                            buttonAddReady.disabled = false;
                        } else {
                            buttonAddReady.disabled = true;
                        }
                    }
                }
            })
        })
    }

    document.addEventListener('click', (event) => {
        const isInputClick = document.querySelector('.list-Ready').contains(event.target);
        let selectReadyLength = Array.from(document.querySelectorAll('.create-task-select')).length;

        if (!isInputClick) {
            selectReady.remove();
        }

        if (selectReadyLength > 1) {
            selectReady.remove();
        }
    })
})

buttonAddInProgress.addEventListener('click', () => {
    const selectInProgress = document.createElement('ul');

    let arrayListLiReady = Array.from(document.querySelector('#listLiReady').children);
    let arrayListLiInProgressReady;

    for (let i = 0; i <= arrayListLiReady.length - 1; i++) {
        arrayListLiInProgressReady = document.createElement('li');
        arrayListLiInProgressReady.innerText = arrayListLiReady[i].innerText;
        selectInProgress.appendChild(arrayListLiInProgressReady);
    }

    if (selectInProgress.classList.contains('create-task-select')) {
        selectInProgress.remove();
    } else {
        buttonAddInProgress.parentElement.insertBefore(selectInProgress, buttonAddInProgress).classList.add('create-task-select');

        selectInProgress.childNodes.forEach(li => {
            li.addEventListener('click', () => {
                const createElemLi = document.createElement('li');
                const appendElemLi = document.querySelector('#listInProgress').appendChild(createElemLi);

                appendElemLi.innerText = li.innerText;
                li.remove();

                for (let i = 0; i <= arrayListLiReady.length - 1; i++) {
                    if (arrayListLiReady[i].innerText == appendElemLi.innerText) {
                        arrayListLiReady[i].remove();

                        if (Array.from(document.querySelector('#listInProgress').children).length) {
                            buttonAddFinished.disabled = false;
                        }

                        if (Array.from(document.querySelector('#listLiReady').children).length) {
                            buttonAddInProgress.disabled = false;
                        } else {
                            buttonAddInProgress.disabled = true;
                        }
                    }
                }
            })
        })
    }

    document.addEventListener('click', (event) => {
        const isInputClick = document.querySelector('.list-In-Progress').contains(event.target);
        let selectReadyLength = Array.from(document.querySelectorAll('.create-task-select')).length;

        if (!isInputClick) {
            selectInProgress.remove();
        }

        if (selectReadyLength > 1) {
            selectInProgress.remove();
        }
    })

})

buttonAddFinished.addEventListener('click', () => {

    const selectInFinished = document.createElement('ul');
    let arrayListLiFinished = Array.from(document.querySelector('#listInProgress').children);
    let arrayListLiFinishedInProgress;

    for (let i = 0; i <= arrayListLiFinished.length - 1; i++) {
        arrayListLiFinishedInProgress = document.createElement('li');
        arrayListLiFinishedInProgress.innerText = arrayListLiFinished[i].innerText;
        selectInFinished.appendChild(arrayListLiFinishedInProgress);
    }

    if (selectInFinished.classList.contains('create-task-select')) {
        selectInFinished.remove();

    } else {
        buttonAddFinished.parentElement.insertBefore(selectInFinished, buttonAddFinished).classList.add('create-task-select');

        selectInFinished.childNodes.forEach(li => {
            li.addEventListener('click', () => {
                const createElemLi = document.createElement('li');
                const appendElemLi = document.querySelector('#listFinished').appendChild(createElemLi);

                appendElemLi.innerText = li.innerText;
                li.remove();

                for (let i = 0; i <= arrayListLiFinished.length - 1; i++) {
                    if (arrayListLiFinished[i].innerText == appendElemLi.innerText) {
                        arrayListLiFinished[i].remove();
                        if (Array.from(document.querySelector('#listInProgress').children).length) {
                            buttonAddFinished.disabled = false;
                        } else {
                            buttonAddFinished.disabled = true;
                        }
                    }
                }
            })
        })
    }

    document.addEventListener('click', (event) => {
        const isInputClick = document.querySelector('.list-Finished').contains(event.target);
        let selectReadyLength = Array.from(document.querySelectorAll('.create-task-select')).length;

        if (!isInputClick) {
            selectInFinished.remove();
        }

        if (selectReadyLength > 1) {
            selectInFinished.remove();
        }
    })

})
