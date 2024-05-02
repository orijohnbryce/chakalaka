let state = false; // to know if the screen is flashing or not
let color = "red"  // to know what will be the next color to change the body to.
let iid = null;    // to control the setInterval infinite run

function changeState() {
    if (!state){
        iid = setInterval(changeColor, 500);
        state = true;
    }else {
        clearInterval(iid)
        state = false;
        document.body.style.backgroundColor = "white";
    }    
}


function changeColor() {    
    if (color === "red"){        
        document.body.style.backgroundColor = "blue";
        color = "blue";
    }else {
        document.body.style.backgroundColor = "red"; 
        color = "red";                     ;
    }
}