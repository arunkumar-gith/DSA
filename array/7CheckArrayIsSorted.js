const arr=[1,2,4,7,9,12,10,45,78,78,99];

function checkSorted(arr){

    for(let i=0;i<arr.length -1;i++){
        if(arr[i] > arr[i+1]){
            return false;
        }
    }

    return true

}

console.log("ans",checkSorted(arr))