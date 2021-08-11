// https://www.hackerrank.com/challenges/counting-valleys/

function countingValleys(steps, path) {
    let i;
    let count=0;
    let valley=0;
    for(i=0;i<steps;i++){
        let x=path[i];
        switch (x){
            case 'D':
                count--;
                break;
            case 'U':
                if(count == -1 ){
                valley++;
                }
                count++;
                break;
            default:
                return "Invalid input, please use only 'U or 'D'";
                break;
        }
    }
    return valley;
}
