const arr=[0,2,4,7,1,9,-1,6,0,4,0];



function leftRotateArayBy1(arr){
    let ele=arr[0];

    for(let i=0;i<arr.length -1;i++){
        arr[i]=arr[i+1];
    }
    arr.pop();
    arr.push(ele);

    return arr
}

console.log("ans",leftRotateArayBy1(arr))