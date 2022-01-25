//For loop
var num:number=5
var i:number
var factorial=1

for(i=num;i>=1;i--){
    factorial*=i
}

console.log("factorial :"+factorial)

//For in loop
var j:any
var n:any="a b c"
for(j in n){
    console.log(n[j])
}

//while loop
while(num>=1){
    factorial=factorial*num
    num--
}

console.log("The factorial is "+factorial)

//do while loop
var no:number=10
do{
    console.log(no)
    n--
}while(n>=0)

//Break
var i1:number=1
while(i1<=10){
    if(i1%5==0){
        console.log("The first multiple of 5 between 1 and 10 :"+i1)
        break
    }
    i1++
}

//Continue 
var num1:number=0
var count1:number=0

for(num1=0;num1<=20;num1++){
    if(num1%2==0){
        continue
    }
    count1++
}
console.log("The count of odd value between 0 and 20 is "+count1)

//Infinite for loop
// for(;;){
//     console.log("This is an endless for loop")
// }

//Infinite While loop
// while(true){
//     console.log("This is an endless while loop")
// }


