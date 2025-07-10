const arr=[0,1,4,0,3,0,10,0,-1,4,8,0];

function swap(arr,i,j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}

function moveZerostoEnd(arr){
    // let j=1;

    // for(let i=0;i<arr.length;i++){
    //     if(arr[i] == 0 && arr[j] != 0 ){
    //         swap(arr,i,j)
    //     }
    //     else if(arr[i]==0 && arr[j] == 0){
    //         j++;
    //     }
    // }

    for(let i=0;i<arr.length;i++){
        if(arr[i]==0){
            arr.splice(i,1)
        }
    }
    return arr
}

console.log("ans",moveZerostoEnd(arr))