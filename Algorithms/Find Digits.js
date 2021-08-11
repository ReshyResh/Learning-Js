// https://www.hackerrank.com/challenges/find-digits/

function findDigits(n) {
    let number = n.toString();
    let arr=[];
    let count=0;
    for (let i = 0; i < number.length; i++) {
    arr.push(number.charAt(i));
    }
    for (let j = 0; j < number.length; j++) {
        if(n%arr[j]==0){
            count++;
        }
    }
    return count;
}
