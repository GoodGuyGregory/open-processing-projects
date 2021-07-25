
const TOTAL = 800;
let points = [];

function setup() {
    createCanvas(windowWidth, windowHeight);

    for (var i = 0; i < TOTAL; i++) {
        points.push({
            pos: createVector(width / 2, height / 2),
            dir: random(TWO_PI),
            size: random(0, 50),
            color: color(random(50, 255), random(40, 255), random(40, 255))
        });
    }
}

function draw() {
    background(50);
    // add time to the equation:
    var time = millis() / 1000;
    let i = 0;
    while (i < TOTAL) {
        var point = points[i];

        //  trick 2:
        point.dir += noise(point.pos.x, point.pos.y, time) - 0.477;

        //trick 1
        point.pos.x += cos(point.dir);
        point.pos.y += sin(point.dir);

        //  Constrainted Values:

        //  TODO:
        //  random size and random color:
        noStroke();
        fill(point.color);
        ellipse(point.pos.x, point.pos.y, point.size);
        i++;
    }
}