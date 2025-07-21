

function reverse(arr,i,j){
    if(i>=j){
        return
    }
    arr[i]=arr[i]+arr[i];
    arr[j]=arr[i]-arr[j];
    arr[i]=arr[i]-arr[j]
    reverse(i+1,j-1)
}

let arr=[2,4,5,6,7,8,9,6];

n=arr.length-1;

reverse(arr,0,n)
console.log("ans",arr)