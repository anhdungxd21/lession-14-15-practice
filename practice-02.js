let resultUnit1 = document.getElementById("resultUnit1");
//Unit 1 ----------------------------------------------------------
function powerOfNumber(num) {
    resultUnit1.innerHTML =  'Bình phương của '+num+ '= '+ num* num;
    return num * num;
}
//Unit 2 ----------------------------------------------------------
let perimeter = document.getElementById("perimeter");
let acreage = document.getElementById("acrecage");
function calculatePerimeter(radius) {
    // Tính chu vi
    let result = 2 * radius * Math.PI;
    perimeter.innerHTML = "Chu vi hình tròn: " + Math.round(result * 100) /100;
}
function calculateAcreage(radius) {
    // Tính diện tích
    let result = radius * radius * Math.PI;
    acreage.innerHTML = "Diện tích hình tròn: " + Math.round(result * 100) /100;
}
//Unit 3 ----------------------------------------------------------
let resultUnit3 = document.getElementById("resultUnit3");
function calculateFactorials(num) {
    let result = 1;
    if (num < 0) result = -1;
    else if(num == 0){
        result = 1;
    } else {
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
    }
    resultUnit3.innerHTML = "Result: " + result;
}
//Unit 4 -----------------------------------------------------------
let resultUnit4 = document.getElementById("resultUnit4");
function isNumber(val) {
    if (!isNaN(val)) {
        resultUnit4.innerHTML = "True";
        // return true;
    } else {
        resultUnit4.innerHTML = "False";
        // return false;
    }
}
//Unit 5 -----------------------------------------------------------
let resultUnit5 = document.getElementById("resultUnit5");
function isSmallest() {
    // let num1 = arguments[0];
    // let num2 = arguments[1];
    // let num3 = arguments[2];
    let min = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        console.log(+arguments[i]);
        if (min > +arguments[i]){
            min = +arguments[i];
        }
    }
    resultUnit5.innerHTML = min;
}
//Unit 6 -----------------------------------------------------------
let resultUnit6 = document.getElementById("resultUnit6");
function isPositiveNumber(val) {
    if (isNaN(val)) {
        resultUnit6.innerHTML = "Không phải là số";
    } else if (val % 1 === 0){
        if(val >= 0) resultUnit6.innerHTML = "true";
        else resultUnit6.innerHTML = "false";
    } else{
        resultUnit6.innerHTML = "Không phải số nguyên"
    }
}