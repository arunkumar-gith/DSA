const arr=require('../questions');

console.log("arr",arr)

function secondLargest(arr){
    let largest=arr[0];
    let sl=-1;

    for(let el of arr){
        if(el > largest){
            sl=largest;
            largest=el;
        }
    }

    return sl;

}

console.log("and",secondLargest(arr))