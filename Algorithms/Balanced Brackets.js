// https://www.hackerrank.com/challenges/balanced-brackets/

function balancedBrackets(s) {
    let open = [];
    let balanced = 0;
    
        const check = (n,arr) => {
        switch (n){
            case ")":
                if(arr[arr.length-1] == "("){
                    arr.pop();
                }
                else { balanced = 1;}
                break;
            case "]":
                if(arr[arr.length-1] == "["){
                    arr.pop();
                }
                else { balanced = 1;}
                break;
            case "}":
                if(arr[arr.length-1] == "{"){
                    arr.pop();
                }
                else { balanced = 1;}
                break;
			default:
				break;
        }
    }
    
    for(let i = 0; i < s.length; i +=1 ){
        if(s[i] == "{" || s[i] == "[" || s[i] == "("){
            open.push(s[i]);
        }
        else {
            check(s[i],open);
        }
    }
	
	if(open.length != 0){return false;}
    
    if (balanced == 0) {
        return true;
    }
    else {
        return false;
    }
}