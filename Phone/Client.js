class Mobile{
battery;
draft;
storeReceive;
storeSend;
 
constructor(){
    this.battery=100;
    this.draft="";
    this.storeReceive=[];
    this.storeSend=[];
}
checkOnOff(){
    return this.battery>0;
}
charge(){
    this.battery=100;

}
writeMessage(newMessage){
    this.draft=newMessage;
}
sendMessage(newPhone){
    let mess = this.draft;
    //Send draff mess to the newPhone
    newPhone.storeReceive.push(mess)
    //Send the draff of phone to sent phone current
    this.storeSend.push(mess);
    //delete the draft
    this.draft="";
    this.battery--
}
}