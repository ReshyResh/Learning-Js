// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/

function breakingRecords(scores) {
    let [ hi, lo ] = [ scores[0], scores[0] ];
let [ max, min ] = [ 0, 0 ];

for (let i = 1; i < scores.length; i++) {
    if (scores[i] > hi) { hi = scores[i]; max++; }
    if (scores[i] < lo) { lo = scores[i]; min++; }
}

return [ max, min ];
}
