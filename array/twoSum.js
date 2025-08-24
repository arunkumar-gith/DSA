
//brute force
function twoSum(arr,k){
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==k){
                return {i,j}
            }
        }
    }

    return -1;
}

//better(by Hashing)



console.log("answer",twoSum([5,3,6,4,9,15,3],14))