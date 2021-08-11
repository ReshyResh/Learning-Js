//  https://www.hackerrank.com/challenges/climbing-the-leaderboard/
function climbingLeaderboard(ranked, player) {
    let nrank=ranked.length;
    let nplay=player.length;
    let ranked2=[];
    let bol=false;
    let positions=[];
    let blob;
    for (let i=0;i<nplay;i++){
        for (let j=0;j<nrank;j++){
            console.log("Checking player score "+player[i]+" . Against ranked score: "+ranked[j]);
            if(player[i]>ranked[j] || player[i]==ranked[j]){
                blob=j;
                ranked2=ranked.splice(0, ranked.indexOf(ranked[j]));
                ranked.unshift(player[i]);
                ranked=ranked2.concat(ranked);
                let pos=0;
                for(let h=0;h<ranked.length;h++){
                    if(ranked[h]!=ranked[h+1]){
                        pos++;
                        if(ranked[h]==player[i]){
                            positions.push(pos);
                            break;
                        }
                    }
                }
                console.log("New leaderboard: "+ranked);
                bol=true;
                break;
            }
        }




        if (bol==false){
            ranked.push(player[i]);
            console.log("Lowest score, pushed at the end, new leaderboard: "+ranked);
            positions.push(ranked.indexOf(player[i])-1);
        }
        if(player[i]<player[i+1]){
        ranked2=ranked.splice(0, ranked.indexOf(player[i]));
        ranked.shift();
        ranked=ranked2.concat(ranked);
        }
        }
        console.log(positions);
        return positions;
    }
