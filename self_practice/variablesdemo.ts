var name1:string="Amit";
var score1:number=50;
var score2:number=42.50;
var sum=score1+score2;

console.log("name :"+name1)
console.log("Score 1 :"+score1)
console.log("Score 2 :"+score2)
console.log("Score sum :"+sum)

//Type assertion
var str='1'
var str2:number=<number> <any> str
console.log(typeof(str2))

var num=2
console.log("Value of num :"+num)
// num="12"
console.log(num)


//scopes
var global_num=12
class Numbers{
    num_val=13
    static sval=10;

    storeNum():void{
        var local_num=14;
    }
}

console.log("Global num:"+global_num)
console.log(Numbers.sval)

var obj = new Numbers()
console.log("Global num :"+obj.num_val)