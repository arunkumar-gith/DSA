const arr=require("../questions");
console.log("arr",arr)

function reverseArray(arr){
    let j=arr.length-1
    for(let i=0;i<=arr.length/2;i++){
        arr[i]=arr[i]+arr[j];
        arr[j]=arr[i]-arr[j];
        arr[i]=arr[i]-arr[j];

        j--;
    }
    return arr
}

console.log("ans",reverseArray(arr))