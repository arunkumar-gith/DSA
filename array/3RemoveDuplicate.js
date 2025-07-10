// const arr=require('../questions.js')
const arr=[1,3,5,5,7,8,8,8,9,10,12,14,14,20]

function removeDup(arr){
//     let result=[]
//    for(let i=1;i<arr.length;i++) {
//     if(arr[i] != arr[i-1]){
//         result.push(arr[i-1])
//     }
//    }
//    return result

    for(let i=1;i<arr.length;i++){
        if(arr[i] == arr[i-1]){
            arr.splice(i,1)
        }
    }
    return arr;
}



console.log("arr",removeDup(arr))