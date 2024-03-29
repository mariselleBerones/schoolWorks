
// variables are outside so all functions can access them
// var num is for total clicks available
// color counter and color pressed is for the color to check if they are called/clicked
var num = 3;
var blueCount = 0;
var redCount = 0;
var yellowCount = 0;

var bluePressed = Boolean(false);
var redPressed = Boolean(false);
var yellowPressed = Boolean(false);

//onload so that it will be checked/called as soon as the page loads/refereshes
function startUp() {
    document.getElementById("num").innerHTML = num;
}

// when a  button or icon is pressed, it's processed to check which color it is.
// Then it changes the font color to the color chosen.
function buttonPressed(img){
    //checking if the image id is blue
    if(img.id == "blue"){
        //checks if the there are still available color clicks(num)
        if((num <= 3) && (num >= 0)){
            if(bluePressed == false){
                num -=1;
                blueCount += 1;
                bluePressed = !bluePressed;
                blueCount = "blue";
                document.getElementById("num").innerHTML = num;
                document.getElementById("blueCount").innerHTML = blueCount;
            }
    
            else if(bluePressed == true){
                num +=1;
                blueCount -= 1;
                bluePressed = !bluePressed;
                blueCount = "";
                document.getElementById("num").innerHTML = num;
                document.getElementById("blueCount").innerHTML = blueCount;
            }
            else{}
        }
    }
    
    //checking if the image id is red
    else if(img.id == "red"){
        //checks if the there are still available color clicks(num)
        if((num <= 3) && (num >= 0)){
            if(redPressed == false){
                num -=1;
                redCount += 1;
                redPressed = !redPressed;
                redCount ="red";
                document.getElementById("num").innerHTML = num;
                document.getElementById("redCount").innerHTML = redCount;
            }
    
            else if(redPressed == true){
                num +=1;
                redCount -= 1;
                redPressed = !redPressed;
                redCount ="";
                document.getElementById("num").innerHTML = num;
                document.getElementById("redCount").innerHTML = redCount;
            }
            else{}
        }
    }

    //checking if the image id is yellow
    else if(img.id == "yellow"){
        //checks if the there are still available color clicks(num)
        if((num <= 3) && (num >= 0)){
            if(yellowPressed == false){
                num -=1;
                yellowCount += 1;
                yellowPressed = !yellowPressed;
                yellowCount ="yellow";
                document.getElementById("num").innerHTML = num;
                document.getElementById("yellowCount").innerHTML = yellowCount;
            }
    
            else if(yellowPressed == true){
                num +=1;
                yellowCount -= 1;
                yellowPressed = !yellowPressed;
                yellowCount ="";
                document.getElementById("num").innerHTML = num;
                document.getElementById("yellowCount").innerHTML = yellowCount;
            }
            else{}
        }
    }

    //The next block of codes are for the character change. 
    //If the conditions are met, it will change into the approriate images/characters

    // blue + red + yellow = brown
    if((bluePressed == true) && (redPressed == true) && (yellowPressed == true)){
        document.getElementById("title").style.color="rgb(110, 38, 14)";
        document.getElementById("character").src = "assets/images/chocoChara.PNG";
        document.getElementById("mixedColor").innerHTML="Choco Decora";
    }
    // blue + red = violet
    else if ((bluePressed == true) && redPressed == true){
        document.getElementById("title").style.color="rgb(127, 0, 255)";
        document.getElementById("character").src = "assets/images/violetChara.PNG";
        document.getElementById("mixedColor").innerHTML="Lavender Decora";
    }
    // blue + yellow = green
    else if((bluePressed == true) && (yellowPressed == true)){
        document.getElementById("title").style.color="rgb(0, 255, 0)";
        document.getElementById("character").src = "assets/images/greenChara.PNG";
        document.getElementById("mixedColor").innerHTML="Lime Decora";
    }

    // red + yellow = orange
    else if((redPressed == true) && (yellowPressed == true)){
        document.getElementById("title").style.color="rgb(255, 165, 0)";
        document.getElementById("character").src = "assets/images/orangeChara.PNG";
        document.getElementById("mixedColor").innerHTML="Clementine Decora";
    }
    
    // red = red
    else if(redPressed == true){
        document.getElementById("title").style.color="rgb(255,0,0)";
        document.getElementById("character").src = "assets/images/redChara.PNG";
        document.getElementById("mixedColor").innerHTML="Strawberry Decora";
    }

    // yellow = yellow
    else if(yellowPressed == true){
        document.getElementById("title").style.color="rgb(255,255,0)";
        document.getElementById("character").src = "assets/images/yellowChara.PNG";
        document.getElementById("mixedColor").innerHTML="Lemon Decora";
    }

    // blue = blue
    else if(bluePressed == true){
        document.getElementById("title").style.color="rgb(0,0,255)";
        document.getElementById("character").src = "assets/images/blueChara.PNG";
        document.getElementById("mixedColor").innerHTML="Blueberry Decora";
    }

    //default
    else{
        document.getElementById("title").style.color="rgb(0, 0, 0)";
        document.getElementById("character").src = "assets/images/defaultChara.PNG";
        document.getElementById("mixedColor").innerHTML="Normal";
    }
}