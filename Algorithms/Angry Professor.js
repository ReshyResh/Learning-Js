// https://www.hackerrank.com/challenges/angry-professor/

function angryProfessor(k, a) {
    let ontime=0;
    let late=0;
    for ( let i=0; i<a.length;i++){
        if (a[i]<=0){
            ontime+=1;
        }
        else {
            late+=1;
        }
    }
    console.log("Guys ontime:" + ontime);
    console.log("Guys late:" + late);
    if(ontime >= k){
        return "NO";
    }
    else {
        return "YES";
    }


}
