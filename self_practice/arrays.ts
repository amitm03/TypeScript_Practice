var alphas:string[];

alphas=["1","2","3","4"]
console.log(alphas[0])
console.log(alphas[1])

var nums:number[]=[1,2,3,4]
console.log(nums[0])
console.log(nums[1])
console.log(nums[2])
console.log(nums[3])
console.log(nums[4])

var arr_names:number[]=new Array(4)
for(let i=0;i<arr_names.length;i++){
    arr_names[i]=i*2
    console.log(arr_names[i])
}

var names:string[]=new Array("MAry","Tome","Jack","Jill")
for(let i=0;i<names.length;i++){
    console.log(names[i])
}

var alpha = ["a","b","c"]
var numeric=[1,2,3]

var alphaNumeric=alpha.concat(numeric)
console.log(alphaNumeric)

function isBigEnough(element,index,array){
    return (element>=10)
}

var passed=[12,5,8,130,44].every(isBigEnough)
console.log("Test value :"+passed)

var filtered=[12,5,8,130,44].filter(isBigEnough)
console.log("Test value filtered:"+filtered)

let num=[7,8,9]
num.forEach(function(value){
    console.log(value)
})

var indx = [12,5,8,130,44].indexOf(8)
console.log("index is "+indx)

var arr = new Array("First","Second","Third")
var str1 = arr.join()
console.log("str1 :"+str1)

var str2 = arr.join(", ")
console.log("str2 :"+str2)

var str3 = arr.join(" + ")
console.log("str3 :"+str3)

var indx2 = [12,5,8,130,144].lastIndexOf(8)
console.log("index is "+indx2)

var number2 = [1,4,9]
var roots = number2.map(Math.sqrt)
console.log("roots is :"+roots)

var numbers1 = [1,4,9]
var element = numbers1.pop()
console.log("element is "+element)

var element = numbers1.pop()
console.log("element is "+element)

var numbers2 = new Array(1,4,9)
var length = numbers2.push(10)
console.log("new number is "+numbers2)

length = numbers2.push(20)
console.log("new number is "+numbers2)

var total = [0,1,2,3].reduce(function(a,b){
    return a+b;
})

console.log("Total is "+total)

var total = [0,1,2,3].reduceRight(function(a,b){
    return a+b;
})
console.log("Total is "+total)

var revArr = [0,1,2,3].reverse();
console.log("Reversed array is "+revArr)

var shiftArr = [10,1,2,3].shift()
console.log("Shifted value is "+shiftArr)

var arr=["orange","mango","banana","sugar","tea"]
console.log("arr.slice(1,2) :"+arr.slice(1,2))
console.log("arr.slice(1,3) :"+arr.slice(1,3))

var retVal = [2,5,8,1,4].some(isBigEnough)
console.log("Returned value is "+retVal)

var retVal = [12,5,8,1,4].some(isBigEnough)
console.log("Returned value is "+retVal)

var arr = new Array("orange","mango","banana","sugar")
var sorted = arr.sort()
console.log("Returned string is "+sorted)

var arr=["orange","mango","banana","sugar","tea"]
var removed = arr.splice(2,0,"water")
console.log("After adding 1: "+arr)
console.log("removed is "+removed)

removed = arr.splice(3,1)
console.log("After removing 1: "+arr)
console.log("removed is "+removed)

var arr = new Array("orange","mango","banana","sugar")
var str = arr.toString()
console.log("returned string is "+str)

var arr = new Array("orange","mango","banana","sugar")
var length = arr.unshift("water")
console.log("Returned array is "+arr)
console.log("Length of the array is "+length)