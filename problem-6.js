/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;

var incrementRate = 5;
var currentSalary = startingSalary;
for(var i =0; i < experience; i++){
    currentSalary = currentSalary * (1 + incrementRate / 100);
}
console.log(currentSalary.toFixed(2));





   