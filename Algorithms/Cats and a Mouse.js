// https://www.hackerrank.com/challenges/cats-and-a-mouse/

function catAndMouse(x, y, z) {
    let diff1=Math.abs(z-x);
    let diff2=Math.abs(z-y);
    if (diff1==diff2){
        return "Mouse C";
    }
    else if(diff1>diff2){
        return "Cat B";
    }
    else {
        return "Cat A";
    }

}
