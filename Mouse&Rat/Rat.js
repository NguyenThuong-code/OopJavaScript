class Rat{
    name
    weight
    speet
    status
    say
    constructor(name, weight,speet){
        this.nameRat=name;
        this.weightRat=weight;
        this.speetRat=speet;
        
    }
    ratLive(){
        return this.status=true;
    }
    ratDie(){
        return this.status=false
    }
    statusRat(){
     if(this.status ==true){
        alert("Live!")
     }else{
        alert("Die!")
     }
    }
    mouseAction(sound){
        this.say=sound;
        alert(this.say)
    }
}