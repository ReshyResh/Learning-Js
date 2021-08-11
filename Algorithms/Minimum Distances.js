// https://www.hackerrank.com/challenges/minimum-distances/

function minimumDistances(a) {
    let n=a.length;
    let diff=0;
    let diffmin=Infinity;
    let found=false;
    for(let i=0;i<n;i++){
        console.log("Testing number "+a[i]+". At position: "+i);
        for(let j=i+1;j<n;j++){
            console.log("Testing number "+a[i]+" against the other index  "+a[j]);
            if(a[i]==a[j]){
                found=true;
                console.log("Found two equals: "+a[i]+" and "+a[j]);
                diff=j-i;
                if(diff<diffmin){
                    diffmin=diff;
                }
            }
          }
    }
    if(found==false){
    return "-1";
}

return diffmin;
}
