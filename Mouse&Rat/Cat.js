class Cat{
    name
    weight
    speet
    talk
    constructor(name, weight, speet, mouse){
        this.nameCat= name;
        this.weightCat=weight;
        this.speetCat=speet
       this.mouse=mouse
    }
   
    getWeightCat(){
        return this.weight
    }
   setSoundCat(sound){
 this.sound=sound;
   }
   getSoundCat(){
    alert(this.sound)
   }
   actionCat(sound){
    this.sound=sound;
    alert(this.sound)
   }
   catchMouse(){
    if(this.mouse.speetMouse<this.speetCat){
        alert("The car touched the Rat")
    }else{
        alert("The Cat Cannot touch the Rat")
    }
   }
   catEatRat(){
    if(this.mouse.status){
        this.weightCat= this.weightCat+this.mouse.weightRat;
        this.mouse.status=false;
        alert("Rat have been eating by Cat")
    }
   }
}
