
function printNumber(n,cnt){
    if(cnt==n){
        return
    }
    console.log(cnt);
    printNumber(n,++cnt)
}


console.log("ans",printNumber(5,1))