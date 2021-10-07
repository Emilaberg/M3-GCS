
// Matilda was here

// .

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = "1000";
canvas.height = "1000";

ctx.fillStyle = "green";
ctx.fillRect(0, 0, canvas.width, canvas.height);


class DISPLAY {
    #LOCK;
    // #DSP;

    constructor(width, height) {
        this.WIDTH = width;
        this.HEIGHT = height;
        this.PLANE = new Array(width).fill(0).map(element => new Array(height).fill(0));;
        this.ZOOM = 0;
        this.#LOCK;
    }

    putPixel(x, y, color) {
        this.PLANE[x][y] = color;
    }

    line(x1, y1, x2, y2, color) {

    }

    circle(x1, y1, radius, color) {

    }

    rectangle(x1, y1, x2, y2, color) {

    }

    clear(color) {
        this.PLANE = this.PLANE.map(element1 => element1.map(element2 => color));
    }

    resize(width, height) {

    }

    textOut(x, y, color, string) {

    }

    scrollLeft() {

    }

    scrollRight() {

    }

    scrollUp() {

    }

    scrollDown() {

    }

    pscrollLeft() {

    }

    pscrollRight() {

    }

    pscrollUp() {

    }

    pscrollDown() {

    }

}



function render() {
    let scaleX = window.innerWidth / canvas.width;
    let scaleY = window.innerHeight / canvas.height;

    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // canvas.style.transformOrigin = '0 0';

    // canvas.style.transform = 'scale(' + Math.min(scaleX, scaleY) + ')';


    requestAnimationFrame(render);
}
requestAnimationFrame(render);