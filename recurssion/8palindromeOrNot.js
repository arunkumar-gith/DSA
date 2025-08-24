
function palindrome(str,i,j){
    if (i>=j){
        return true;
    }
    if(str[i] != str[j]){
        return false;
    }

    return palindrome(str,i+1,j-1)
}


let str="Arunur"
n=str.length-1


console.log("ans",palindrome(str,0,n))