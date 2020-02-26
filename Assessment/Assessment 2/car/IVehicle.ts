interface IVehicle {
    speed: number;
    engineOn: boolean;
    fuelLevel: number;
    accelerate(): void;
    brake(): void;
    turnCarOn(): void;
    turnCarOff(): void;
    refillFuel(): void;
}

class Submarine implements IVehicle {

}

class Truck implements IVehicle {

}

class Plane implements IVehicle {
    
}

export default IVehicle;