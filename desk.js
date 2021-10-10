img = "";
status = "";

function preload() {
    img = loadImage("desk.jpeg");
}

function setup() {
    canvas = createCanvas(540, 320);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status - Detecting Objects";
}

function modelLoaded() {
    window.alert("Cocossd model has been loaded successfully in your website");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.error(error);
    }
    else {
        console.log(results);
    }
}

function draw() {
    image(img, 0, 0, 540, 320);
}