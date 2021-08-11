// https://www.hackerrank.com/challenges/strange-advertising/

function viralAdvertising(n) {
    let first=5;
    let total=0;
    for (let i=0;i<n;i++){
        first=Math.floor(first/2);
        total=total+first;
        first=first*3;
    }
    return total;

}
