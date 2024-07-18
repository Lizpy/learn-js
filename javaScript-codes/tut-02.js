//creating an object in javaScript
let rectangle={
   length: 1,
   breadth:2,
   draw(){
    console.log("drawing a rectangle");
   },
   delete(){
    console.log("delete the rect");
   }
};  
console.log("length: "+rectangle.length+" breadth: "+rectangle.breadth);
//calling a function
rectangle.draw();
rectangle.delete();  