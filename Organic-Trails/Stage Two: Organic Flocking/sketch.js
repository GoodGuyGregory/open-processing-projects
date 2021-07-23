const TOTAL = 200;
let points = [];

function setup() {
    createCanvas(windowWidth, windowHeight);

    for (var i = 0; i < TOTAL; i++) {
        points.push({
            pos: createVector(width / 2, height / 2),
            dir: random(TWO_PI)
        });
    }
}

function draw() {
    var time = millis() / 1000;
    for (var i = 0; i < TOTAL; i++) {
        var point = points[i];

        point.dir += noise(point.pos.x, point.pos.y, time) - 0.477;

        //trick 3
        var mouseAngle = atan2(mouseY - point.pos.y, mouseX - point.pos.x);
        point.dir += (mouseAngle - point.dir) * 0.05;

        point.pos.x += cos(point.dir) * 2;
        point.pos.y += sin(point.dir) * 2;

        circle(point.pos.x, point.pos.y, 10);
    }
}