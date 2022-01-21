import {Shape} from './shape'
//BSNL REcharge
//107 rs -validity
//499 rs - 3 months plan

export class Circle extends Shape{
    radius:number;
    area:number;

    constructor(r:number){
        super();
        this.radius=r;
        this.area=0;
    }

    Myarea(): void {
        this.area=3.14*this.radius*this.radius;
    }

    Display(){
        console.log(`-----Circle Area----
            Radius::${this.radius}
            Area :: ${this.area}
        `)
    }
}