TinyTurtle.apply(window, [undefined, 400, 400]);

function square(size){
forward(size);
right(90);
forward(size);
right(90);
forward(size);
right(90);
forward(size);
right(90);
forward(size);
}

//square();

function triangle(size){
    right(30);
    forward(size);
    right(120);
    forward(size);
    right(120);
    forward(size);
}

//triangle(50);

function rectangle(){
    forward(80);
    right(90);
    forward(50);
    right(90);
    forward(80);
    right(90);
    forward(50);
    
}
//rectangle();

function house(size) {
square(size);
triangle(size);
}
//house();

function hexagon(size) {
    forward(size);
    right(60);
    forward(size);
    right(60);
    forward(size);
    right(60);
    forward(size);
    right(60);
    forward(size);
     right(60);
    forward(size);
    
}
//hexagon(50);
//hexagon(30);
//hexagon(90);
//hexagon(20


function rectangle2(size){
    forward(60);
    right(90);
    forward(size);
    right(90);
    forward(60);
    right(90);
    forward(size);
    
}
//rectangle(6);


function shape (shape, size){
    
   if (shape === "rectangle"){
   rectangle(size)

   }
   else if(shape === "triangle"){
       triangle(size)
   }
   else if(shape==="square"){
       square(size)
   }
   else if(shape==="hexagon"){
       hexagon(size)
   }
   else if (shape === "house"){
       house(size)
   }
   else if(shape === "rectangle2"){
       rectangle2(size)
   }
   else {
       alert("not a shape")
   }
   

}

    
shape('house', 100);
shape("rectangle",90);
shape('hexagon', 110);





stamp();

