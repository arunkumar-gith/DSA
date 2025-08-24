
function subArray(arr){
    let n=arr.length;
    let result=[];
    for(let i=0;i<n;i++){
        for(let j=i;j<n;j++){
            let subArr=[];
            for(let k=i;k<=j;k++){
                subArr.push(arr[k]);
            }
            result.push([...subArr])
        }
    }



    return result;
}

console.log("ans",subArray([1,2,3,4]))