img = "";
status = "";
objects = [];

function preload() {
    img = loadImage("tv and ac.jpg");
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
        objects = results;
    }
}

function draw() {
    image(img, 0, 0, 540, 320);

    if(status != "") {
        for(i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status - Object Detected";

            fill("#F10000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#F10000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}