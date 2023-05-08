// document.querySelector(".i-c1").addEventListener('input', myClickV2)

let data1 = document.querySelector(".i-c1").value * 27900;
let data2 = document.querySelector(".i-c2").value * 14600;
let data3 = document.querySelector(".i-c3").value * 10500;
let data4 = document.querySelector(".i-c4").value * 55000;
let data5 = document.querySelector(".i-c5").value * 43800;
let data6 = document.querySelector(".i-c6").value * 13500;
let sum = data1 + data2 + data3 + data4 + data5 + data6;
const myVar = document.getElementById('test');
const hidVar = document.querySelectorAll('.null-sum')

const formattedNumber = sum.toLocaleString(); // отформатированная строка
myVar.innerHTML = formattedNumber;
var nulSum = document.querySelectorAll('.test')

function myClick1() {
    data1 = document.querySelector(".i-c1").value * 27900;
    // console.log(data1);
    return data1;
}
function myClick2() {
    data2 = document.querySelector(".i-c2").value * 14600;
    // console.log(data2);
    return data2;

}
function myClick3() {
    data3 = document.querySelector(".i-c3").value * 10500;
    // console.log(data3);
    return data3;

}
function myClick4() {
    data4 = document.querySelector(".i-c4").value * 55000;
    // console.log(data4);
    return data4;

} function myClick5() {
    data5 = document.querySelector(".i-c5").value * 43800;
    // console.log(data5);
    return data5;
}
function myClick6() {
    data6 = document.querySelector(".i-c6").value * 13500;
    // console.log(data6);
    return data6;
}
function mySum() {
    // console.log('ты почти справился!');
    sum = data1 + data2 + data3 + data4 + data5 + data6;
    // console.log(sum);
    for (let i = 0; i < nulSum.length; i++) {
        if (sum == 0) {
            nulSum[i].classList.add('hidden')
        }
        if (sum !== 0) {
            nulSum[i].classList.remove('hidden')
        }
    }

    for (let i = 0; i < hidVar.length; i++) {
        if (sum == 0) {
            hidVar[i].classList.remove('hidden')
            hidVar[i].classList.add('center')

            console.log('почти конец');
        }
        if (sum !== 0) {
            hidVar[i].classList.add('hidden')
            hidVar[i].classList.remove('center')
            
        }
    }
    const formattedNumber = sum.toLocaleString(); // отформатированная строка
    console.log(formattedNumber)
    myVar.innerHTML = formattedNumber;
}

// console.log(sum);

// const myVar = document.getElementById('test');
// myVar.innerHTML = sum;

