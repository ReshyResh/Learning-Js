// https://www.hackerrank.com/challenges/plus-minus/

function plusMinus(arr) {
    let n=arr.length;
    let count=0;
    let countpos=0;
    let countneg=0;
    let countzero=0;
    for(let i=0;i<n;i++){
        if(arr[i]>0){
            countpos++;
            count++;
        }
        else if(arr[i]<0){
            countneg++;
            count++;
        }
        else {
            count++;
            countzero++;
        }
        }
    let fracplus= (countpos/count).toFixed(6);
    let fracneg = (countneg/count).toFixed(6);
    let fraczer = (countzero/count).toFixed(6);
    console.log(fracplus);
    console.log(fracneg);
    console.log(fraczer);
}
