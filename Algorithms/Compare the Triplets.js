// https://www.hackerrank.com/challenges/compare-the-triplets/

function compareTriplets(a, b) {
    let count=[0,0];
    for (let i=0; i<a.length; i++){
        console.log("A vale: " + a[i] + " e b vale: " + b[i]);
        if(a[i] > b[i] ){
            count[0]++;
        }
        else if (a[i] < b[i]){
            count[1]++;
        }

        }
        console.log(count);
        return count;
}
