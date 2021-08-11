// https://www.hackerrank.com/challenges/migratory-birds

function migratoryBirds(arr) {
    let count1=0;let count2=0;let count3=0;let count4=0;let count5=0;let maxcount=0;
    for(let i=0;i<arr.length;i++){
        switch (arr[i]){
            case 1: count1++; break;
            case 2:count2++;break;
            case 3:count3++;break;
            case 4:count4++;break;
            case 5:count5++;break;
        }
    }
    console.log("1: "+count1+"+\n2: "+count2+"\n3: "+count3+"\n4: "+count4+"\n5: "+count5);
    let arr2=[];
    let maxindex=0;
    arr2.push(count1,count2,count3,count4,count5);
    console.log(arr2);
    for(let j=0;j<arr2.length;j++){
        console.log("Bird of type "+(j+1)+" sighted "+arr2[j]+" times");
        if(arr2[j]>=arr2[j+1]){
            maxcount=arr2[j];
            maxindex=j+1;
        }
    }
    for(let k=1;k<=arr2.length;k++){
        if(arr2[k]==maxcount){
            console.log("Bird number "+(k+1)+" has same n sightings "+arr2[k]+" as the maximum "+maxcount);
            if(maxindex>(k+1)){
                maxindex=(k+1);
            }
        }
    }
    console.log("Max is number "+maxindex+" with "+ maxcount+" occurences");
    return maxindex;



}
