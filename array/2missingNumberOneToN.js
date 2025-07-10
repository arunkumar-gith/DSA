const arr=[1,4,2,6,3,7,9,8,10];
// const arr =require('../questions.js')
// console.log("arr",arr)

// function missing(arr){
//   let n=arr.length
//   let sum=(n+1)*(n +2)/2
//   for(let el of arr){
   
//     sum=sum-el;
//   }
//   return sum
// }

function swap(arr,i,j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}

function sortArr(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
               swap(arr,i,j)
            }
        }
    }
}

function missing(arr,n){
    sortArr(arr)
    
    let obj={};

    for(let i=1;i<n;i++){
        obj[i]=arr[i-1];
    }
    console.log("obj",obj)

    // for(let i=1;i<n;i++){
    //     console.log("obj.i",obj.i)
    //     if(!obj.i){
    //         return i;
    //     }
    // }

    

}


console.log("ans",missing(arr,10))