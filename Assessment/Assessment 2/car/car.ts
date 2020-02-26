import IVehicle from './IVehicle'

class Car implements IVehicle {
    speed : number;
    engineOn: boolean;
    
    constructor(public fuelLevel = 100) {
        this.speed = 0;
        this.engineOn = false;
    }
    accelerate () {
        if (this.fuelLevel >= 1) {
            this.fuelLevel -= 1;
            this.speed+= 1;
        }
    }
    brake () {
        if (this.speed >= 0){
            this.speed-= 1;
        }
    }
    turnCarOn () {
        this.engineOn = true;
    }
    turnCarOff() {
        this.engineOn= false;
    }
    refillFuel() {
        this.fuelLevel = 100;
    }
}

class Car extends Plane {

}

class Car extends Truck {

}

class Car extends Submarine {

}

export default Car;
