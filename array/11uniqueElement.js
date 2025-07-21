const arr = require('../questions')

function uniqueElement(arr){
    //////////////////////by using Map/////////////////
    // let map=new Map();

    // for(let el of arr){
    //     if(map.has(el)){
    //         map.set(el,2);
    //     }else{
    //         map.set(el,1);
    //     }
    // }

    // for(let [key,value] of map){
    //     if(value == 1){
    //         return key;
    //     }
    // }



    ////////////////By using Object///////////////
    // let obj={};

    // for (let el of arr){
    //     if(obj[el]){
    //         obj[el]++;
    //     }else{
    //         obj[el]=1;
    //     }
    // }

    // for(let key in obj){
    //     if(obj[key]==1){
    //         return Number(key);
    //     }
    // }


    ///////////By using XOR//////////
    let unique=0;
    for(let el of arr){
        unique=unique^el;
    }
    return unique;

    // console.log("obj",obj)


}

console.log("ans",uniqueElement([1,3,5,7,9,1,3,5,7]))