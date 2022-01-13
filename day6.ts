var numbers:number[]=[1,2,3,2,4,5,3];

for(let i=0;i<numbers.length;i++){
    for(let j=0;j<numbers.length;j++){
        console.log(numbers[i]+" , "+numbers[j])
        if(numbers[i]==numbers[j]){
            console.log("Duplicate values "+numbers[i]+", "+numbers[j])
        }else{
            console.log("Distinct values "+numbers[i]+", "+numbers[j])
        }
    }

}