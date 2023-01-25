// const leapYears = function(year) {
//     if((year%4 === 0 && year% 100 === 0 && year%400 === 0) || (year%4 === 0 & !(year % 100 === 0)))  {
//         return true;
//     } else {
//         return false;
//     }    
// };

const leapYears = function(year) {
    if(year%100 === 0 && year%400 === 0) {
        return true;
    } 
    if(year%100 === 0) {
        return false;
    } 
    if (year%4 === 0) {
        return true;
    }
    return false;
}
console.log(leapYears(700));
console.log(leapYears(1900));

// Do not edit below this line
module.exports = leapYears;
