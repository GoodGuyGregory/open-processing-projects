
function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    let increment = 0.01;
    background(50);
    // Creates images with Pixels
    let yOff = 0;
    loadPixels();
    for (let y = 0; y < height; y++) {
        let xOff = 0;
        for (let x = 0; x < width; x++) {
            let index = (x + y * width) * 4;
            let brightness = noise(xOff, yOff) * 255;
            pixels[index + 0] = brightness;
            pixels[index + 1] = brightness;
            pixels[index + 2] = brightness;
            pixels[index + 3] = 255;
            xOff += increment;
        }
        yOff += increment;
    }
    updatePixels();

}