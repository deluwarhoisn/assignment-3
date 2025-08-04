/** Problem -01 ( Divide the Asset ) */

var area = 800;

var value = area / 2;
console.log(value);

/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;

if(money >= 25000){
    console.log('Laptop')
}
else if(money>= 10000){
    console.log('Cycle')
}
else{
    console.log('Chocolate')
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;

for(var day= 1; day<=lastDay; day++){
    if(day % 3 === 0) {
        console.log(day+'- medicine');
    }
    else{
        console.log(day+'- rest');
    }
}


/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";

if (fileName.includes('#')|| fileName.includes('.pdf') || fileName.includes('.docx')){
    output = 'Store';

}
else{
    output = 'Delete';
}
console.log(output);

/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhanku" , roll: 1014 ,department: "cse" };

var Email = student.name + student.roll + '.' + student.department + '@ph.ac.bd';
console.log(Email);

/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;

var incrementRate = 5;
var currentSalary = startingSalary;
for(var i =0; i < experience; i++){
    currentSalary = currentSalary * (1 + incrementRate / 100);
}
console.log(currentSalary.toFixed(2));





   