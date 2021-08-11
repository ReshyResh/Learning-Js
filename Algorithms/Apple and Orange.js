// https://www.hackerrank.com/challenges/apple-and-orange/

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let acount=0;
    let ocount=0;
    let dist=0;
    let dist2=0;
    for(let i=0;i<apples.length;i++){
        dist=apples[i]+a;
        if(dist>=s && dist<=t){
            acount++;
        }
    }
    for(let i2=0;i2<oranges.length;i2++){
        dist2=oranges[i2]+b;
        if(dist2>=s && dist2<=t){
            ocount++;
        }
    }
    return acount, ocount;
}
