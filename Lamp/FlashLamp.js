class FlashLamp{
    status
    battery
    constructor(){
        this.status= Boolean;
        this.battery=Battery;
    }
    
    setBattery(Battery){
        this.battery=Battery;
    }
    getBatterInfo(){
        return this.battery.getEnergy();
    }
    light(){
        if(this.status){
            alert("Lighting")
        }else{
            alert("Not lighting")
        }
    }
    turnOn(){
        this.status=true;
    }
    turnOff(){
        this.status=false;
    }
}
let flashLamp = new FlashLamp();
flashLamp.setBattery(battery)

document.write("Battery infor:"+flashLamp.getBatterInfo()+"<br>")
flashLamp.light();

document.write("Turn on<br>")
flashLamp.turnOn();
flashLamp.light();
document.write("Battery infor"+flashLamp.getBatterInfo()+"<br")
document.write("Turn off<br>")
document.turnOff();
flashLamp.light();