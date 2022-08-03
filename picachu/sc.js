/**
 * Created by nhatnk on 4/26/17.
 */

 class Hero{
 constructor(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
  
    this.getHeroElement = function(){
      return '<img width="'+ this.size + '"' +
        ' height="'+ this.size + '"' +
        ' src="' + this.image +'"' +
        ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }
  
    this.moveRight = function(){
      this.left += 20;
    }
    this.moveLeft=function(){
        this.left-=20;
    }
    this.moveUp =function(){
        this.top-=20;
    }
    this.moveDown=function(){
        this.top+=20
    }
   

}
  }
  
  var hero = new Hero('imager_2_37264_700.jpg', 20, 30, 200);
  
  function start(){
    if(hero.left < window.innerWidth - hero.size&&hero.top==20){
      hero.moveRight();
    }else if( hero.top<window.innerHeight -hero.size&&hero.left>0){
        hero.moveDown();
    }else if(hero.left>0){
        hero.moveLeft()
    }else if(hero.top>0){
        hero.moveUp()
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 50)
  }
  
  start();
