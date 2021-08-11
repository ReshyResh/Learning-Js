// https://www.hackerrank.com/challenges/sock-merchant

function sockMerchant(n, ar) {
    let i;
    let i2;
    let count=0;
    if(n>0 && n<=100 && n==ar.length){
    for (i=0; i<=n-1; i++){
        if(ar[i]!=null){
          for (i2 = i+1; i2 <= n-1; i2++){
            console.log("Sto comparando "+ar[i]+" con "+ar[i2]);
            if(ar[i]==ar[i2] && ar[i] != null && ar[i2] != null){
                count++;
                console.log("Trovata coppia tra: "+ar[i] +" e " +ar[i2]);
                console.log("Numeri rimasti: "+ar);
                ar[i]=null;
                ar[i2]=null;
                break;
                }
            }
        }
      }
    }
    else {
        return "Invalid input";
    }
    return count;

}
