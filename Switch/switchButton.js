class SwitchButton{
    status;
    lamp;
    constructor(status, lamp){
        this.status= status;
        this.lamp= ElectricLamp;
    }
    connectToLamp(ElectricLamp){
this.lamp= ElectricLamp;
    }
    switchOff(){
        this.status =false;  
        this.lamp.status=false
    }
    switchOn(){
        this.status=true;
        this.lamp.status=true
    }
}