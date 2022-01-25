var str = new String("Spider Man")
console.log("str.constructor is :"+str.constructor)

var uname = new String("Hello World")
console.log(uname)
console.log("Length : "+uname.length)

function employee(id:number,name:string){
    this.id=id
    this.name=name
}

var emp = new employee(123,"Smith")
employee.prototype.email="test@test.com"
console.log("Employee 's Id: "+emp.id) 
console.log("Employee's name: "+emp.name) 
console.log("Employee's Email ID: "+emp.email)

console.log(str.charAt(0))
console.log(str.charAt(1))
console.log(str.charAt(2))
console.log(str.charAt(3))
console.log(str.charAt(4))
console.log(str.charAt(5))

console.log(str.charCodeAt(0))
console.log(str.charCodeAt(1))
console.log(str.charCodeAt(2))
console.log(str.charCodeAt(3))
console.log(str.charCodeAt(4))
console.log(str.charCodeAt(5))

var str2 = new String("Peter Parker")
var str3 = str.concat(str2.toString())
console.log("str+str2 :"+str3)

var str1 = new String("This is string one")

var index = str1.indexOf("string")
console.log(index)

var index = str1.indexOf("one")
console.log(index)

var str_new1 = new String("This is string ond and again string")
var index_new =str_new1.lastIndexOf("string")
console.log("LastIndexOf found string :"+index)

index_new=str_new1.lastIndexOf("one")
console.log("lastIndexOf  found string :"+index_new)

var str_new2 = new String("This is beautiful string")
var index_new2 = str_new2.localeCompare("This is a beautiful string")
console.log("localComare first :"+index_new2)

var re = /apples/gi
var str_new3 ="Apples are round, and apples are juicy"
var newStr =str_new3.replace(re,"oranges")
console.log(newStr)

re = /(\w+)\s(\w+)/;
str_new3="zara ali";
newStr = str_new3.replace(re,"$2,$1")
console.log(newStr)

re=/apples/gi
var str_new4 ="Apples are round, and apples are juicy"
if(str_new4.search(re)==-1){
    console.log("Does not contain apples")
}else{
    console.log("Contains Apples")
}

var sliced = str_new4.slice(3,-2)
console.log("sliced :"+sliced)

var splitted = str_new4.split(" ",3)
console.log(splitted)

console.log(str_new4.substring(1,2))
console.log(str_new4.substr(1,2))
console.log(str_new4.substring(-2,2))
console.log(str_new4.substr(-2,2))
console.log(str_new4.substring(1))
console.log(str_new4.substr(1))
console.log(str_new4.substring(-20,2))
console.log(str_new4.substr(-20,2))
console.log(str_new4.substring(20,2))
console.log(str_new4.substr(20,2))

console.log(str_new4.toLocaleLowerCase())
console.log(str_new4.toLocaleUpperCase())

console.log(str_new4.toLowerCase())
console.log(str_new4.toUpperCase())

console.log(str_new4.toString())

var str_new5 = new String("Hello World")
console.log(str_new5.valueOf())