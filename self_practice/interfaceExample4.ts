interface Person{
    age:number
}

interface Musician extends Person{
    instrument:string
}

var drummer=<Musician>{

}

drummer.age=27
drummer.instrument="Drums"
console.log("Age :"+drummer.age+" , Instrument :"+drummer.instrument)