const sumAll = function(a, b) {
    let total = 0;   
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        console.log(Number.isInteger(a));
        console.log(Number.isInteger(b));
        return "ERROR"
    }   else if (a < b){        
        for(let i = a; i <= b; i++){                
            total = total+i;   
        }        
    } else {    
        for(let i=b; i<=a; i++){                
            total = total+i;   
        }        
    } 
    return total;
};
console.log(sumAll(25, 2));

// Do not edit below this line
module.exports = sumAll;
