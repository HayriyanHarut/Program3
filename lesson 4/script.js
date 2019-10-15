// function main() {
//     var socket = io();
//     var chatDiv = document.getElementById('chat');
//     var input = document.getElementById('message');
//     var button = document.getElementById('submit');

//     function handleSubmit(evt) {
//         var val = input.value;
//         if (val != "") {
//             socket.emit("send message", val);
//         }
//     }
//     button.onclick = handleSubmit;
//     function handleMessage(msg) {
//         var p = document.createElement('p');
//         p.innerText = msg;
//         chatDiv.appendChild(p);
//         input.value = "";
//     } 


//     socket.on('display message', handleMessage);
// }

// window.onload = main; 

function setup() {
    createCanvas(1000, 700);
    background(230);
    strokeWeight(2);
}

let value = 0;
function draw() {
    fill("blue")
   
}
function mouseDragged() {
    value = value + 5;
    if (value > 255) {
        value = 0;
    }
}
 function mouseDragged() {
    ellipse(mouseX, mouseY, 50, 50);
    return false;
    
}
