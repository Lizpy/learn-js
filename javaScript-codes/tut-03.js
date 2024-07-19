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
//for multiple object uses we use function so that everytime you don't have to write let objName...
// for that we have factory function and constructor function
//to avoid renundancy we use factory function just like how factory produces a readymade object for you and you don't have to do it manually
//creating factoryFunction
//it's simple just create a function create a obj inside it and return it
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
//parametrized factory function
function createRectangle(l,b){
  return rectangle={
    length:l,
    breadth:b,
    draw: function(){
      console.log('draw a rect');
    }
  };
}
let rect=createRectangle(5,10);
let rect2=createRectangle(15,10);
let rect3=createRectangle(25,30);
console.table(rect.length+rect2.length+rect3.length);
console.table(rect2.length);
console.table(rect3.length);  