class Human{
    name;
    gender;
    weight;
     constructor(){
        this.name="";
        this.gender=gender;
        this.weight= this.weight;

     }
     getName(){
        return this.name;

     }
     setName(name){
        this.name = name;
     }
     getWeight(){
        return this.weight;
     }
     setWeight(weight){
        this.weight = weight;
     }
     isMale(){
        if(this.gender==1){
            return true;
        }else{
            return false;
        }
     }
     setGender(Boolean){
        this.gender= Male;
     }
     checkApple(Apple){
        if(Apple>10){
            return true;
        }else{
            return false;
        }
     }
     eat(apple){
        if(apple.getWeight()>0){
            apple.decrease();
            this.weight++;
        }else{
            alert("apples are empty!")
        }
        
       
     }
     say(something){
        this.something=something;
     }
     getInfor(human){
        alert(human.name+" "+human.weight+ " "+human.getGender());
     }
     
    }
    let adam = new Human("adam", 1,65);
    let eva= new Human("eva", 2,55);
    adam.say("I am Adam"+"<br>")
    eva.say("I am Eva"+"<br");
    let apple= new Apple(10)
    while(apple.isEmpty() !== true){
        document.write("Adam eats apple"+"<br>")
        adam.eat(apple);

        document.write("Apple result:"+"<br");
        document.write(apple.getWeight()+"level"+"<br>")
        document.write("The weight of Adam:"+adam.getWeight()+"level"+"<br>")
    }