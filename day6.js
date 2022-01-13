var numbers = [1, 2, 3, 2, 4, 5, 3];
for (var i = 0; i < numbers.length; i++) {
    for (var j = 0; j < numbers.length; j++) {
        console.log(numbers[i] + " , " + numbers[j]);
        if (numbers[i] == numbers[j]) {
            console.log("Duplicate values " + numbers[i] + ", " + numbers[j]);
        }
        else {
            console.log("Distinct values " + numbers[i] + ", " + numbers[j]);
        }
    }
}
