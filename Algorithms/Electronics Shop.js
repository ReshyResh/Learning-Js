// https://www.hackerrank.com/challenges/electronics-shop/

function getMoneySpent(keyboards, drives, b) {
    let nkb=keyboards.length;
    let ndr=drives.length;
    let blob;
    let min=Infinity;
    let minkb;
    let mindr;
    for(let i=0;i<nkb;i++){
        for(let j=0;j<ndr;j++){
            blob=b-keyboards[i]-drives[j];
            if(blob<min){
                minkb=keyboards[i];
                mindr=drives[j];
            }
        }
    }
    if(minkb+mindr>b){
        return "-1";
    }
    else{
        return minkb+mindr;
    }
}
