class Battery{
    energy
    constructor(){
        this.energy=100;
    }

    setEnergy(energy){
        this.energy= energy
    }
    getEnergy(){
        return this.energy;
    }
    decreaseEnergy(){
        this.energy--;
    }
}
let battery = new Battery();
battery.setEnergy(100);
