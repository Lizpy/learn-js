// "use strict";//treat all JS code as newer version
// alert(3+3) we are using nodejs not browser so it will throw error in terminal node
// //objects in js
// //different linked variable
// //brought under a single entity named 'object'
// //creating a object
// //object can be referred as collection of key-value pair
// const rectangle={
//   //these are 'property'(data-members)
//   length:1,
//   breadth:2,
//   //creating a function
//   //function created inside object
//   //is called method.The right terminology
//   draw: function(){
//     console.log('drawing a rectangle');
//   }
// };
// //accessing property and method using dot operator
// console.log(rectangle.breadth);
// rectangle.draw();
// //{} denote object literal
// for multiple object uses we use function so that everytime you don't have to write let objName...
// for that we have factory function and constructor function
// to avoid renundancy we use factory function just like how factory produces a readymade object for you and you don't have to do it manually
// creating factoryFunction
// it's simple just create a function create a obj inside it and return it
// function createRectangle(){
//   return rectangle={
//     length:1,
//     breadth:2,
//     draw: function(){
//       console.log('draw a rect');
//     }
//   };
// }
// let rectangle1=createRectangle();
// rectangle1.draw();
// parametrized factory function
// function createRectangle(l,b){
//   return rectangle={
//     length:l,
//     breadth:b,
//     draw: function(){
//       console.log('draw a rect');
//     }
//   };
// }
// let rect=createRectangle(5,10);
// let rect2=createRectangle(15,10);
// let rect3=createRectangle(25,30);
// console.table(rect.length+rect2.length+rect3.length);
// console.table(rect2.length);
// console.table(rect3.length);  

const { keys } = require("object-hash");

// function createCircle(rad){
//   return circle={
//     radius:rad,
//     area: function(){
//       console.log(3.14*rad*rad);
//     }
//   }
// }

// circle1=createCircle(5);
// console.log(circle1.rad);
// circle1.area();  
// Constructor function
//here, we use 'this' keyword 
//this keyword represents current object
// function Rectangle(l,b){
//   this.length=l;
//   this.breadth=b;
//   this.draw=function(){
//     console.log("draw a rectangle");    
//   }  
// }  
// object creation using constructor function  
// let rectangleObject=new Rectangle(3,4);
// rectangleObject.draw();
// console.log(rectangleObject.length+rectangleObject.breadth);
// rectangleObject.color='yellow';//this will be added by itself since Dynamic nature of objects
// //delete this 
// delete rectangleObject.color;
// let Rectangle = new Function('l','b',`
//    this.length=l;
//   this.breadth=b;
//   this.draw=function(){
//     console.log("draw a rectangle");    
//   } `);
//   rectObj=new Rectangle(2,3);
//   console.log(rectObj.length);  
//   console.log(rectObj.breadth);
//   rectObj.draw();
//primitive type v/s reference type
//primtive type creates a copy while reference gives address
  //  let a=10;
  //  let b=a;
  //  a++;
  //  console.log(a);
  //  console.log(b);  
  function character(rank,speed){
    this.speed=speed+1,
    this.rank=rank+1,
    abort(){
      console.log("game aborted");
      rank=null,
      speed=null
    }
  }
  let mustang=new character(3,0);
  for(keys in mustang)  
  console.table(mustang[keys]);