let button = document.getElementById("on-off-btn");

button.onclick = function() {
    let bulb = document.getElementById("bulb");
    
    if (button.innerHTML == "ON") {
        bulb.setAttribute("src", "/bulb-on.jpg")
        button.innerHTML = "OFF";
    } else if(button.innerHTML == "OFF"){
        bulb.setAttribute("src", "/bulb-off.jpg")
        button.innerHTML = "ON";
    } else {
        bulb.setAttribute("src", "/bulb-on.jpg")
        button.innerHTML = "OFF";
    }

};