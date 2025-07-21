

//functional recursion
function factorial(n){
    if(n==2){
        return n
    }
    return n*factorial(n-1);
}

//parmeterised recursion
function factorial1(n,res){
    if(n==1){
        console.log("res",res)
        return 1;
    }
    factorial1(n-1,res*n)
}

console.log("ans",factorial(5))
factorial1(5,1)