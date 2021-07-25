var xOffOne = 0;
var xOffTwo = 1000;

function setup() {
    createCanvas(windowWidth, windowHeight);

}

function draw() {
    background(50);
    // let x = random(width);
    // let y = random(height);

    //  Perlin Noise
    var x = map(noise(xOffOne), 0, 1, 0, width);
    var y = map(noise(xOffTwo), 0, 1, 0, height);

    xOffOne += 0.01;
    xOffTwo += 0.01;


    x += 0.01;
    y += 0.01;


    stroke('rgba(25,0,250,0.25)');
    fill(250);
    strokeWeight(20);
    ellipse(x, y, 95, 95);


}