const arr= require('../questions');

console.log("arr",arr)

function frequencyOfElement(arr,k){
    let count=0;
    for(let el of arr){
        if(el===k){
            count ++;
        }
    }

    return count;
}

console.log("arr",frequencyOfElement(arr,4))