// https://www.hackerrank.com/challenges/the-hurdle-race/

function hurdleRace(k, height) {
    let len=height.length;
    let max=0;
    for(let i=0;i<len;i++){
        if(height[i]>max){
            max=height[i];
        }
    }
    let jumps=max-k;
    if(jumps>0){
        return jumps;
    }
    else {
        return '0';
    }


}
