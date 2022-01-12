let temp_new1 = function(){
    console.log("Anonymous function called")
}

temp_new1();

let temp_new2=function(a:number,b:number):number{
    return a+b;
}

console.log(`Addition is ${temp_new2(2,3)}`)

let temp_new3=()=>{
    console.log("Fat arrow method called")
}

temp_new3();

let temp_new4=(a:number,b:number):number=>{
    return a+b;
}

console.log(`Addition is ${temp_new4(2,3)}`)

function add_new1(a:number,b?:number){
    console.log("Value of a is "+a);
    console.log("Value of b is "+b);
    console.log("Value of a+b is "+(a+b));
}

add_new1(8);
add_new1(2,8);

