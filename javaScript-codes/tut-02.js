//  using let,var,const for declaring variable
const accountId=12345;
let accountEmail="vk@gmail.com"
var accountPass="s%5B5S5twfV^K"
accountCity="Bangalore"
let getPass="false"
//array declaration
let userInfo=[accountId,accountEmail,accountPass,accountCity,getPass];
console.table([accountId,accountEmail,accountPass,accountCity]);
console.log(userInfo[0]+userInfo[1]+userInfo[3]);
// ----scope of let,var
// if(true)
// {
//   let a=5;
//   var b=5;  
// }
// console.log(++a);//throw  an error since scope of let is under the braces only
// console.log(++b);
// //creating an object in javaScript
// let rectangle={
//    length: 1,
//    breadth:2,
//    draw(){
//     console.log("drawing a rectangle");
//    },
//    delete(){
//     console.log("delete the rect");
//    }
// };  
// console.log("length: "+rectangle.length+" breadth: "+rectangle.breadth);
// //calling a function
// rectangle.draw();
// rectangle.delete(); 

