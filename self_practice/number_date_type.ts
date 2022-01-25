console.log("Typescipt number properties")
console.log("Max value "+Number.MAX_VALUE)
console.log("Min value :"+Number.MIN_VALUE)
console.log("Positive infinity :"+Number.POSITIVE_INFINITY)
console.log("Negative infinity :"+Number.NEGATIVE_INFINITY)

//Not a number(NaN)
var month=0
if(month<=0||month>12){
    month=Number.NaN
    console.log("Month is "+month)
}else{
    console.log("Value accepted")
}

function employee(id:number,name:string){
    this.id=id
    this.name=name
}

var emp=new employee(123,"Smith")
employee.prototype.email="amit@test.com"

console.log("Employee 's Id: "+emp.id) 
console.log("Employee's name: "+emp.name) 
console.log("Employee's Email ID: "+emp.email)

//Number methods
var num1 = 1225.30
var val = num1.toExponential()
console.log(val)

var num2 = 177.234
console.log(num2.toFixed)
console.log(num2.toFixed(2))
console.log(num2.toFixed(3))

var num3 = new Number(177.1234)
console.log(num3.toLocaleString())

var num4 = new Number(7.123456)
console.log(num4.toPrecision())
console.log(num4.toPrecision(1))
console.log(num4.toPrecision(2))

var num5 = new Number(10)
console.log(num5.toString())
console.log(num5.toString(2))
console.log(num5.toString(8))

//valueOf
console.log(num5.valueOf())
