const arr=[2,5,8,2,-1,0,24,6,68,99,-10,4]

function max(arr){
    let max=Number.MIN_SAFE_INTEGER
    let min=Number.MAX_SAFE_INTEGER

    for (let el of arr){
        if(el>max){
            max=el;
        }
        if(el<min){
            min=el;
        }
    }
    return {max,min}
}

console.log("arr",max(arr))