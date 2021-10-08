class DISPLAY {
    #LOCK;

    constructor(width, height) {
        this.WIDTH = width;
        this.HEIGHT = height;
        this.PLANE = new Array(width*height).fill(0);
        this.ZOOM = 0;
        this.#LOCK;
    }

    putPixel(x, y, color) {
        // this.PLANE[x][y] = color;
        this.PLANE[y*this.WIDTH+x] = color
    }

    line(x1, y1, x2, y2, color) {

    }

    circle(x1, y1, radius, color) {

    }

    rectangle(x1, y1, x2, y2, color) {

    }

    clear(color) {
        // return this.PLANE.map(element1 => element1.map(element2 => color));
        this.PLANE = this.PLANE.map(element => color);
    }

    resize(width, height) {
        this.PLANE = this.PLANE
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