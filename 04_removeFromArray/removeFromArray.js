const removeFromArray = function(someArray, ...a ) { 
    let resultingArray = someArray;   
        for(let i=0; i<someArray.length; i++){            
            if (a.includes(someArray[i])){ 
                resultingArray.splice(i, 1);
                i--;
            }
        }      
    return resultingArray;    
};
console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4));

// removeFromArray(3, [1, 3, 5]);

// Do not edit below this line
module.exports = removeFromArray;


