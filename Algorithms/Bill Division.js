// https://www.hackerrank.com/challenges/bon-appetit/

function bonAppetit(bill, k, b) {
    let billlen=bill.length;
    let billsum=0;
    let share;
    for(let i=0;i<billlen;i++){
        billsum=billsum+bill[i];
    }
    if (k != 0){
        billsum=billsum-bill[k];
    }
    share=billsum/2;
    if(share==b){
        console.log("Bon Appetit");
    }
    else{
        let rest=b-share;
        console.log(rest);
    }

}
