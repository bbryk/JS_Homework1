
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

function reverseLoop2(str){
    let newStr = "";
    let wordLen = str.length;

    let counter = 0;
    while(counter < wordLen){
        newStr += str[wordLen-1-counter]
        counter++;
    }
    return newStr;
}


function recursiveReverse(str){
    if (str===""){
        return str;
    }
    return recursiveReverse(str.substr(1,)) + str.charAt(0);
}

function halfReverse(str){
    let wordLen = str.length;
    let arr = str.split("");

    let halfLen =     Math.floor(wordLen/2);
    for (let i =0;i <halfLen; i++){
        let temp = arr[i];
        arr[i] = arr[wordLen-1-i];
        arr[wordLen-1-i]= temp;
    }
    return arr.join("");

}

// console.log(reverseArray1("word"));
// console.log(reverseLoop1("hello"));

// console.log(reverseLoop2("hello"));

// console.log(recursiveReverse("hello"));
console.log(halfReverse("word"));

