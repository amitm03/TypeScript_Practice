var arr:number[]=[12,13]
var[x,y] = arr
console.log(x)
console.log(y)


var j:any
var nums:number[]=[1001,1002,1003,1004]

for(j in nums){
    console.log(nums[j])
}

var multi:number[][]=[[1,2,3],[23,24,25]]
console.log(multi[0][0])
console.log(multi[0][1])
console.log(multi[0][2])
console.log(multi[1][0])
console.log(multi[1][1])
console.log(multi[1][2])

var names:string[]=new Array("Mary","Tom","Jack","Jill")

function disp(array_names:string[]){
    for(var i=0;i<array_names.length;i++){
        console.log(names[i])
    }
}

disp(names)

function disp1():string[]{
    return new Array("Mary","JAck","Jill")
}

var nums1:string[]=disp1()
for(var i in nums1){
    console.log(nums1[i])
}