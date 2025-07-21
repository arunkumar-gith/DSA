
function printNames(n,cnt){
    if(cnt==n){
        return;
    }
    console.log("Arun Kumar");
    printNames(n,++cnt);
}

printNames(5,0)