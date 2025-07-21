
function printNto1(n,i){
    if(i>=n){
        return
    }

    printNto1(n,++i);
    console.log(i)
}

printNto1(5,0)