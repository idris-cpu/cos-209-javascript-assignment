class Car{
constructor(brand){
    this.brand=brand;
}
drive(){
    console.log('${this.brand}is driving');

    }
}
const myCar = new Car("LEXUS");
myCar.drive();