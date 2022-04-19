
function reverseArray1(str){
    let arrayStr = str.split("");
    arrayStr = arrayStr.reverse();
    let reversedStr = arrayStr.join("");
    return reversedStr;
}

function reverseLoop1(str){
    let newStr = "";
    let wordLen = str.length;
    for(let i = wordLen-1; i>=0;i--){
        newStr += str[i]
    }
    return newStr;
}

console.log(reverseArray1("word"));
console.log(reverseLoop1("hello"));

