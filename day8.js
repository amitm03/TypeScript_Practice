var jsonObj = {
    fname: "Amit",
    "lname": "Mishra",
    id: 9
};
//Accessing JSON Object - MEthod 1 : Dot Operator
console.log("\n    First name : " + jsonObj.fname + "\n    Last name :" + jsonObj.lname + "\n    ID : " + jsonObj.id + "\n");
//Accessing JSON Object - MEthod 1 : Square Operator
console.log("\n    First name : " + jsonObj["fname"] + "\n    Last name :" + jsonObj["lname"] + "\n    ID : " + jsonObj['id'] + "\n");
//JSON Array of objects
var arrObj = [{
        fname: "NASA",
        lname: "JPL",
        id: 9,
        month: ["Jan", 'Feb', "March"],
        country: {
            cid: 1,
            cname: "India"
        },
        result: [
            {
                sub: "M1",
                marks: 50
            },
            {
                sub: "M2",
                marks: 70
            },
            {
                sub: "M3",
                marks: 90
            }
        ]
    }, {
        fname: "Hubble",
        lname: "Bubble",
        id: 6,
        month: ['May', 'Feb', 'June'],
        country: {
            cid: 2,
            cname: "US"
        },
        result: [
            {
                sub: "M1",
                marks: 55
            },
            {
                sub: "M2",
                marks: 65
            },
            {
                sub: "M3",
                marks: 75
            }
        ]
    },
    {
        fname: "Jaxa",
        lname: "Spaceships",
        id: 3,
        month: ['Dec', 'Aug', 'April'],
        country: {
            cid: 3,
            cname: "Japan"
        },
        result: [
            {
                sub: "M1",
                marks: 60
            },
            {
                sub: "M2",
                marks: 75
            },
            {
                sub: "M3",
                marks: 85
            }
        ]
    }
];
for (var i = 0; i < arrObj.length; i++) {
    console.log("\n    -------------------------------\n    First name :: " + arrObj[i].fname + ",\n    Last name :: " + arrObj[i].lname + "\n    ID :: " + arrObj[i].id + "\n    Month:: " + arrObj[i].month + "\n    Country name :" + arrObj[i].country.cname + "\n    ----------------------------\n    ");
    for (var j = 0; j < arrObj[i].result.length; j++) {
        console.log("\n            Subject :: " + arrObj[i].result[j].sub + "\n            Marks :: " + arrObj[i].result[j].sub + "\n        ");
    }
}
console.log("Country is " + arrObj[0].country.cname);
