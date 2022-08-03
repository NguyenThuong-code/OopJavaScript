class Apple{
weight;
constructor(){
    this.weight=10
}
getWeight(){
    return this.weight;
}
isEmpty(){
    if(this.weight<0){
        return true;
    }else{
        return false;
    }
}
decrease(){
    if(this.isEmpty()){
        alert("Apple is Empty!")
    }else{
    this.weight--;
     }
    }
}
