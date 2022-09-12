let button = document.getElementById("on-off-btn");

button.onclick = function() {
    let bulb = document.getElementById("bulb");
    
    if (button.innerHTML == "ON") {
        bulb.setAttribute("src", "/Bulb/bulb-on.jpg")
        button.innerHTML = "OFF";
    } else if(button.innerHTML == "OFF"){
        bulb.setAttribute("src", "/Bulb/bulb-off.jpg")
        button.innerHTML = "ON";
    } else {
        bulb.setAttribute("src", "/Bulb/bulb-on.jpg")
        button.innerHTML = "OFF";
    }

};