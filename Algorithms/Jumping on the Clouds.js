// https://www.hackerrank.com/challenges/jumping-on-the-clouds/

function jumpingOnClouds(c) {
    let n=c.length;
    let steps=0;
    for(let i=0;i<n-1;i++){
        if(c[i] == 0){
            i++;
        }
        steps++;
    }
return steps;
}
