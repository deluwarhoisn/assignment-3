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
