const arr=[2,4,1,6,8,3,7,-1,4,6];

function swap(arr,i,j){
    arr[i]=arr[i]+arr[j];
    arr[j]=arr[i]-arr[j];
    arr[i]=arr[i]-arr[j];
}

function reverseArray(arr,i,j){
    while(i < j){
        swap(arr,i,j)
        i++;
        j--;
    }
}

function rotateArrayByK(arr,k){
    // while(k--){
    //     let ele=arr[0];
    //     for(let i=0;i<arr.length -1;i++){
    //         arr[i]=arr[i+1];
    //     }
    //     arr.pop();
    //     arr.push(ele);
    // }

    reverseArray(arr,0,k-1)
    reverseArray(arr,k,arr.length-1);
    reverseArray(arr,0,arr.length-1)





    return arr
}

console.log("ans",rotateArrayByK(arr,2))