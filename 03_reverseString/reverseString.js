const reverseString = function(text) {
    let reverse = "";    
    for(let i=(text.length)-1; i>=0; i--) {        
        reverse += text[i];                      
    }
    return reverse; 
};
console.log(reverseString("Hilda"));

// Do not edit below this line
module.exports = reverseString;
