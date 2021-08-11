// https://www.hackerrank.com/challenges/grading/

function gradingStudents(grades) {
    let i;
    let blob = [];
    let gradesnew = [];
    let n = grades.length;
    for ( i=0; i<=n-1; i++ || grades[i]<=10) {
    if (grades[i]>=100 && grades[i]<=1){
        grades.splice(i, 1);
    }
        else if(grades[i] >= 37) {
            let count=0;
            blob[i]=grades[i];
             while (blob[i] % 5 != 0) {
                count++;
                blob[i]++;
             }
                if(blob[i] % 5 == 0 && count <= 2){
                  console.log(blob[i]);
                  gradesnew.push(blob[i]);
                }
                else if (count >= 3) {
                  console.log(grades[i]);
                    gradesnew.push(grades[i]);
                }
           }
        else {
            console.log(grades[i]);
            gradesnew.push(grades[i]);
        }

    }
    return gradesnew;
}
