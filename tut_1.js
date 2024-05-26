let n=prompt("enter a number");
console.log(n);

let arr=[];
for (let i = 1; i <= n; i++) {
    arr[i-1]=i;
    
}
console.log(arr);

let sum=arr.reduce((res,cur)=>{
    return res+cur;
});
console.log(sum);

let fact=arr.reduce((res,curr)=>{
    return res*curr;
});
console.log(fact);