

// document.getElementById("button").onclick() = function(){

    
//     document.getElementById("button").classList.add("button");
    

// }





















function night(){
    var dark = document.getElementById("button");
    document.body.classList.add("active")
    dark.textContent = "Day_Mode"
   
}


function remove(){
    var dark = document.getElementById("button");
    document.body.classList.remove("active")
    dark.textContent = "Night_Mode"
    dark.style.fontFamily = "cursor"
    dark.style.fontSize = "x-large"


    
}




// Function to switch to day mode
// function setDayMode() {
    // document.body.classList.remove('button');
// }

// Function to switch to night mode
// var store = document.getElementById("button")

// function setDayMode() {
//     document.body.classList.add('light');
// }


// function day() {
//     document.body.classList.remove('light');
// }


// store.addEventListener('click', setDayMode);
// store.addEventListener('onblur', day);











// function changeColor(){
//     var light = document.getElementById("main")

//     light.classList.add("light")


  
//     }




// function blur(){
   
//     light.classList.remove("light")


// }
