
function reverseArray1(str){
    let arrayStr = str.split("");
    arrayStr = arrayStr.reverse();
    let reversedStr = arrayStr.join("");
    return reversedStr;
}


console.log(reverseArray1("hue"));
