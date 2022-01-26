var val:string|number

val=12
console.log(val)
val="This is a string"
console.log(val)

function disp(name:string|string[]){
    if(typeof name=="string"){
        console.log("name")
    }else{
        for(let i=0;i<name.length;i++){
            console.log(name[i])
        }
    }
}

disp("makr")
disp(["Mary Jane","Peter Parker","Spider-man"])

var arr2:number[]|string[]
var i1:number

arr2=[1,2,4]

for(i1=0 ; i1 < arr2.length;i1++){
    console.log(arr2[i1])
}

arr2=["Mumbai","Pune","Delhi"]
for(i1=0 ; i1 < arr2.length;i1++){
    console.log(arr2[i1])
}