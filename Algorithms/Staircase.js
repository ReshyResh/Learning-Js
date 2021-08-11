// https://www.hackerrank.com/challenges/staircase/

function staircase(n) {
    let strf='';
   for (let i=1;i<=n;i++){
       for(let j=n-i;j>0;j--){
       strf=strf+" ";
       }
       let str2="#".repeat(i);
       strf=strf+str2;

    strf=strf+"\n";

   }
   return strf;
}
