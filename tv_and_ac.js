img = "";

function preload() {
    img = loadImage("tv and ac.jpg");
}

function setup() {
    canvas = createCanvas(540, 320);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 540, 320);
}