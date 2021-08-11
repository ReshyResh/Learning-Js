// https://www.hackerrank.com/challenges/time-conversion/

function timeConversion(s) {
     let time = s.split(":");
     let flag = time[2].includes("PM");
     var hour = parseInt(time[0]);
     if(flag==true && hour!=12){
         hour=hour+12;
         time[0]=hour;
     }
     if(time[2].includes("AM") && hour==12){
         time[0]="00";
     }
     time=time.toString();
     time=time.split(",").join(":");
     time=time.substring(0, time.length - 2);
     console.log(time);
     return time;
}
