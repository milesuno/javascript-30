let canvas = document.querySelector("#draw");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let context = canvas.getContext("2d");

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", e => (isDrawing = true));
canvas.addEventListener("mouseup", e => (isDrawing = false));
canvas.addEventListener("mouseout", e => (isDrawing = false));

function draw(e) {
    if (!isDrawing) return;
    console.log("down", e);

    [lastX, lastY] = [e.offsetX, e.offsetY];

    context.lineJoin = "round";
    context.lineCap = "round";
    context.lineWidth = 50;
    context.strokeStyle = `hsl(${hue}, 60%, 60%)`;

    hue++

    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
}