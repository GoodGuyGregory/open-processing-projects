let start = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);

}

function draw() {
    background(50);

    //  connect points 
    stroke(255);
    noFill();
    beginShape();
    //  x location in perlin noise
    let xOff = start;
    for (let x = 0; x < width; x++) {
        stroke(255);
        strokeWeight(5);
        //  Random points
        // point(x, random(height));
        //  random lines connected with the random properties
        // vertex(x, random(height));
        // create an offset variable

        //  perlin Noise instead
        let y = noise(xOff) * height;
        vertex(x, y)

        xOff += 0.01;

    }
    endShape();
    start += 0.01;

    // Stops Animation (Drawling of the Canvas)
    // noLoop();

}