//brute Force O(n3)
function longestSubArrayWithSumK(arr,m){
    let result

    let maxi=0
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            let temp=[]
            let sum=0
            for(let k=i;k<=j;k++){
                sum=sum+arr[k]
                temp.push(arr[k])
            }
            if(temp.length > maxi && sum ==m){
                maxi=Math.max(maxi,temp.length)
                result=[...temp]
            }

        }
    }

    return result;
}



//better approach O(n2)
function longestSubArrayWithSumK2(arr,m){
    let result
    let maxi=0

    for(let i=0;i<arr.length;i++){
        let temp=[]
        let sum=0
        for(let j=i;j<arr.length;j++){
                sum=sum+arr[j]
                temp.push(arr[j])
            if(temp.length > maxi && sum ==m){
                maxi=Math.max(maxi,temp.length)
                result=[...temp]
            }

        }
    }

    return result;
}


//optimal O(n) 
//using two pointers

function longestSubArrayWithSumK3(arr,k){
    let sum=0;
    let maxi=0;
    let i=0
    let temp=[]
    let res=[]
    for (let j=0;j<arr.length;j++){
        sum=sum+arr[j];
        temp.push(arr[j])
        if(sum==k && j-i > maxi){
            maxi=Math.max(maxi,j-i)
            res=[...temp];
        }

        if(sum > k){
            i++;
            sum=sum-arr[i]
        }

       
    }
    return res
}


console.log("longest",longestSubArrayWithSumK3([1,1,1,,4,3,0,6,4,1,5,3,4],3))