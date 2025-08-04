function helo(){
    console.log('i am a function')
}
helo();

function monyBage(){
    var money = 4000;
    console.log('i have'+ money +'taka');
}

monyBage();

function jogKorarMachin(input1,input2){
    let sum = input1+input2;
    console.log('sum is ='+ sum);
}
jogKorarMachin(20,50);


function jogKorarMachin(input1,input2){
    let sum = input1+input2;
    console.log('sum is ='+sum);
    return sum;
}
const result = jogKorarMachin(20,10);
console.log(result);