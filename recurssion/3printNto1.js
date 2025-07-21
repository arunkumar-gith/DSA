
function printNto1(n){
    if(n<1){
        return
    }
    console.log(n)
    printNto1(--n)
}

printNto1(5)