let jsonObj = {
    fname:"Amit",
    "lname":"Mishra",
    id:9
}

//Accessing JSON Object - MEthod 1 : Dot Operator
console.log(`
    First name : ${jsonObj.fname}
    Last name :${jsonObj.lname}
    ID : ${jsonObj.id}
`)

//Accessing JSON Object - MEthod 1 : Square Operator
console.log(`
    First name : ${jsonObj["fname"]}
    Last name :${jsonObj["lname"]}
    ID : ${jsonObj['id']}
`)

//JSON Array of objects
let arrObj =[  {
    fname:"NASA",
    lname:"JPL",
    id:9,
    month:["Jan",'Feb',"March"],
    country:{
        cid:1,
        cname:"India"
    },
    result:[
        {
            sub:"M1",
            marks:50
        },
        {
            sub:"M2",
            marks:70
        },
        {
            sub:"M3",
            marks:90
        }
    ]
},{
    fname:"Hubble",
    lname:"Bubble",
    id:6,
    month:['May','Feb','June'],
    country:{
      cid:2,
      cname:"US"
    },
    result:[
      {
        sub:"M1",
        marks:55
      },
      {
        sub:"M2",
        marks:65
      },
      {
        sub:"M3",
        marks:75
      }
    ]
  },
  {
    fname:"Jaxa",
    lname:"Spaceships",
    id:3,
    month:['Dec','Aug','April'],
    country:{
      cid:3,
      cname:"Japan"
    },
    result:[
      {
        sub:"M1",
        marks:60
      },
      {
        sub:"M2",
        marks:75
      },
      {
        sub:"M3",
        marks:85
      }
    ]
  }
];

for(let i=0;i<arrObj.length;i++){
    console.log(`
    -------------------------------
    First name :: ${arrObj[i].fname},
    Last name :: ${arrObj[i].lname}
    ID :: ${arrObj[i].id}
    Month:: ${arrObj[i].month}
    Country name :${arrObj[i].country.cname}
    ----------------------------
    `)

    for(let j=0;j<arrObj[i].result.length;j++){
        console.log(`
            Subject :: ${arrObj[i].result[j].sub}
            Marks :: ${arrObj[i].result[j].sub}
        `)
    }
}

console.log("Country is "+arrObj[0].country.cname)