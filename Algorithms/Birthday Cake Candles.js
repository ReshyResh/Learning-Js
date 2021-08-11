// https://www.hackerrank.com/challenges/birthday-cake-candles/

function birthdayCakeCandles(candles) {
    let n=candles.length;
    let max= 0;
    let count=0;
    for(let i=0;i<n;i++) {
        if(candles[i]>max){
            max=candles[i];
        }}
    for(let i=0;i<n;i++) {
        if(candles[i]==max){
            count++;
        }
    }
    return count;
}
