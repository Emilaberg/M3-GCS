
// Matilda was here

// .




class DISPLAY {
    #LOCK;

    constructor(width, height) {
        this.WIDTH = width;
        this.HEIGHT = height;
        this.PLANE = new Array(width).fill(0).map(element => new Array(height).fill(0));;
        this.ZOOM = 0;
        this.#LOCK;
    }

    putPixel(x, y, color) {
        this.PLANE[x][y] = color;
        // this.PLANE[y*this.width+x] = color
    }

    line(x1, y1, x2, y2, color) {

    }

    circle(x1, y1, radius, color) {

    }

    rectangle(x1, y1, x2, y2, color) {

    }

    clear(color) {
        return this.PLANE.map(element1 => element1.map(element2 => color));
    }

    resize(width, height) {
        this.PLANE = this.PLANE
    }

    textOut(x, y, color, string) {

    }

    scrollLeft() {
        for (let x = 1; x < this.WIDTH; x++) {
            for (let y = 1; y < this.HEIGHT; y++) {
                //this.PLANE[(x+this.WIDTH*(y-1))-1] = this.PLANE[(x+this.WIDTH*(y-1))];
                this.PLANE[x][y] = this.PLANE[x+1][y];
            }
        }
        for (let y = 1; y <= this.HEIGHT; y++) {
            //this.PLANE[(this.WIDTH+this.WIDTH*(y-1))-1] = 255;
            this.PLANE[this.WIDTH][y] = 255;
        }
    }

    scrollRight() {
        for (let x = this.WIDTH; x > 0; x++) {
            for (let y = 1; y <= this.HEIGHT; y++) {
                //this.PLANE[(x+this.WIDTH*(y-1))-1] = this.PLANE[(x+this.WIDTH*(y-1))];
                this.PLANE[x+1][y] = this.PLANE[x][y];
            }
        }
        for (let y = 1; y <= this.HEIGHT; y++) {
            //this.PLANE[(this.WIDTH+this.WIDTH*(y-1))-1] = 255;
            this.PLANE[0][y] = 255;
        }
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

    zoom(zoomVal) {

    }

}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = "1000";
canvas.height = "1000";


function render() {
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "blue";
    ctx.fillRect(10, 10, 100, 50);
    ctx.fillRect(500, 500, 1, 1);


    requestAnimationFrame(render);
}
requestAnimationFrame(render);
ctx.scrollLeft();