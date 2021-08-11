// https://www.hackerrank.com/challenges/divisible-sum-pairs/

function divisibleSumPairs(n, k, ar) {
    let pair=0;
    for (let i=0;i<n-1;i++){
        for(let j=i+1;j<n;j++){
            let blob=ar[i]+ar[j];
            console.log("Summing "+ar[i]+" with "+ar[j]+" equals: "+blob);
            if(blob%k==0){
                pair++;
                console.log("Found a pair! "+ar[i]+" summed with "+ar[j]+" equals "+blob);
            }
        }
    }
    console.log("Pairs: "+pair);
    return pair;

}
