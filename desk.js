img = "";

function preload() {
    img = loadImage("desk.jpeg");
}

function setup() {
    canvas = createCanvas(540, 320);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 540, 320);
}