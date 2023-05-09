const myCir1 = document.getElementsByClassName('circle1');
const myHint1 = document.querySelectorAll('.hint-1');

for (let i = 0; i < myCir1.length; i++) {
    myCir1[i].addEventListener('click', myHintOpen1);
}

function myHintOpen1() {
    for (let i = 0; i < myHint1.length; i++) {
        myHint1[i].classList.add('visible')
    }
}

document.addEventListener('click', myHintClose1);
function myHintClose1() {
    const clickedElement = event.target;
    if (!clickedElement.closest('.circle1')) {
        for (let i = 0; i < myHint1.length; i++) {
            myHint1[i].classList.remove('visible')
        }
    }
}

const myCir2 = document.getElementsByClassName('circle2');
const myHint2 = document.querySelectorAll('.hint-2');

for (let i = 0; i < myCir2.length; i++) {
    myCir2[i].addEventListener('click', myHintOpen2);
}

function myHintOpen2() {
    for (let i = 0; i < myHint2.length; i++) {
        myHint2[i].classList.add('visible')
    }
}

document.addEventListener('click', myHintClose2);
function myHintClose2() {
    const clickedElement = event.target;
    if (!clickedElement.closest('.circle2')) {
        for (let i = 0; i < myHint2.length; i++) {
            myHint2[i].classList.remove('visible')
        }
    }
}

const myCir3 = document.getElementsByClassName('circle3');
const myHint3 = document.querySelectorAll('.hint-3');

for (let i = 0; i < myCir3.length; i++) {
    myCir3[i].addEventListener('click', myHintOpen3);
}

function myHintOpen3() {
    for (let i = 0; i < myHint3.length; i++) {
        myHint3[i].classList.add('visible')
    }
}

document.addEventListener('click', myHintClose3);
function myHintClose3() {
    const clickedElement = event.target;
    if (!clickedElement.closest('.circle3')) {
        for (let i = 0; i < myHint3.length; i++) {
            myHint3[i].classList.remove('visible')
        }
    }
}

const myCir4 = document.getElementsByClassName('circle4');
const myHint4 = document.querySelectorAll('.hint-4');

for (let i = 0; i < myCir4.length; i++) {
    myCir4[i].addEventListener('click', myHintOpen4);
}

function myHintOpen4() {
    for (let i = 0; i < myHint4.length; i++) {
        myHint4[i].classList.add('visible')
    }
}

document.addEventListener('click', myHintClose4);
function myHintClose4() {
    const clickedElement = event.target;
    if (!clickedElement.closest('.circle4')) {
        for (let i = 0; i < myHint4.length; i++) {
            myHint4[i].classList.remove('visible')
        }
    }
}
const myCir5 = document.getElementsByClassName('circle5');
const myHint5 = document.querySelectorAll('.hint-5');

for (let i = 0; i < myCir5.length; i++) {
    myCir5[i].addEventListener('click', myHintOpen5);
}

function myHintOpen5() {
    for (let i = 0; i < myHint5.length; i++) {
        myHint5[i].classList.add('visible')
    }
}

document.addEventListener('click', myHintClose5);
function myHintClose5() {
    const clickedElement = event.target;
    if (!clickedElement.closest('.circle5')) {
        for (let i = 0; i < myHint5.length; i++) {
            myHint5[i].classList.remove('visible')
        }
    }
}
const myCir6 = document.getElementsByClassName('circle6');
const myHint6 = document.querySelectorAll('.hint-6');

for (let i = 0; i < myCir6.length; i++) {
    myCir6[i].addEventListener('click', myHintOpen6);
}

function myHintOpen6() {
    for (let i = 0; i < myHint6.length; i++) {
        myHint6[i].classList.add('visible')
    }
}

document.addEventListener('click', myHintClose6);
function myHintClose6() {
    const clickedElement = event.target;
    if (!clickedElement.closest('.circle6')) {
        for (let i = 0; i < myHint6.length; i++) {
            myHint6[i].classList.remove('visible')
        }
    }
}