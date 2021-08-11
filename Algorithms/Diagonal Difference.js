// https://www.hackerrank.com/challenges/diagonal-difference

function diagonalDifference(arr) {
    let n=arr.length;
    let sum1=0;
    let sum2=0;
    let second=n-1;
    console.log(n);
    for(let i=0;i<n;i++){
        sum1=sum1+arr[i][i];
        console.log("Summing first diagonal "+arr[i][i]);
        sum2=sum2+arr[second][i];
        console.log("Summing second diagonal "+arr[second][i]);
        second--;
    }
    console.log(sum1);
    console.log(sum2);
    return Math.abs(sum1 - sum2);
}
