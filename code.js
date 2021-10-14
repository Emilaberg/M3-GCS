
// Matilda was here

// .



const transpose = m => m[0].map((x,i) => m.map(x => x[i]));
class DISPLAY {
    #LOCK;

    constructor(width, height) {
        this.WIDTH = width;
        this.HEIGHT = height;
        this.PLANE = new Array(width).fill(0).map(element => new Array(height).fill(0));;
        this.ZOOM = 0;
        this.#LOCK;
    }

    to1D(x, y) {
        return y * this.WIDTH + x;
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
        console.log("ScrollLeft påbörjas");
        for (let x = 1; x < this.WIDTH; x++) {
            for (let y = 1; y < this.HEIGHT; y++) {
                this.PLANE[(x+this.WIDTH*(y-1))-1] = this.PLANE[(x+this.WIDTH*(y-1))];
                //this.PLANE[x-1][y] = this.PLANE[x][y];
            }
        }
        for (let y = 0; y < this.HEIGHT; y++) {
            this.PLANE[(this.WIDTH+this.WIDTH*(y-1))-1] = 0;
            //this.PLANE[this.WIDTH-1][y] = 0;
        }
        console.log("ScrollLeft avslutas");
    }

    scrollRight() {
        console.log("ScrollRight påbörjad");
        for (let x = this.WIDTH; x > 0; x--) {
            for (let y = 0; y < this.HEIGHT; y++) {
                this.PLANE[(x+this.WIDTH*(y-1))-1] = this.PLANE[(x+this.WIDTH*(y-1))];
                //this.PLANE[x][y] = this.PLANE[x-1][y];
            }
        }
        for (let y = 1; y < this.HEIGHT; y++) {
            this.PLANE[(this.WIDTH+this.WIDTH*(y-1))-1] = 0;
            //this.PLANE[0][y] = 0;
        }
        console.log("ScrollRight avslutats");
    }

    scrollUp() {
        for (let y = this.HEIGHT; y > 0; y--) {
            for (let x = 0; x < this.WIDTH; x++) {
                this.PLANE[(x+this.WIDTH*(y-1))-1] = this.PLANE[(x+this.WIDTH*(y-1))];
            }
        }
        for (let x = 0; x < this.WIDTH; x++) {
            this.PLANE[(this.WIDTH+this.WIDTH*(y-1))-1] = 0;
        }
    }

    scrollDown() {
        for (let y = 0; y < this.HEIGHT; y++) {
            for (let x = 0; x < this.WIDTH; x++) {
                this.PLANE[(x+this.WIDTH*(y-1))-1] = this.PLANE[(x+this.WIDTH*(y-1))];
            }
        }
        for (let x = 0; x < this.WIDTH; x++) {
            this.PLANE[(this.WIDTH+this.WIDTH*(y-1))-1] = 0;
        }
    }

    pscrollLeft() {
        let temparray = new Array(this.HEIGHT);
        for (let y = 0; y < this.HEIGHT; y++) {
            //temparray[y] = this.PLANE[(this.WIDTH+this.WIDTH*(y-1))-1];
            temparray[y] = this.PLANE[0][y];
        }
        for (let x = 0; x < this.WIDTH; x++) {
            for (let y = 0; y < this.HEIGHT; y++) {
                //this.PLANE[(x+this.WIDTH*(y-1))-1] = this.PLANE[(x+this.WIDTH*(y-1))];
                this.PLANE[x][y] = this.PLANE[x+1][y];
            }
        }
        for (let y = 0; y < this.HEIGHT; y++) {
            //this.PLANE[(this.WIDTH+this.WIDTH*(y-1))-1] = temparray[y];
            this.PLANE[this.WIDTH-1][y] = temparray[y];
        }
    }

    pscrollRight() {
        let temparray = new Array(this.HEIGHT);
        for (let y = 0; y < this.HEIGHT; y++) {
            //this.PLANE[(this.WIDTH+this.WIDTH*(y-1))-1] = 255;
            temparray[y] = this.PLANE[this.WIDTH-1][y];
        }
        for (let x = 0; x < this.WIDTH; x++) {
            for (let y = 0; y < this.HEIGHT; y++) {
                //this.PLANE[(x+this.WIDTH*(y-1))-1] = this.PLANE[(x+this.WIDTH*(y-1))];
                this.PLANE[x][y] = this.PLANE[x+1][y];
            }
        }
        for (let y = 0; y < this.HEIGHT; y++) {
            //this.PLANE[(this.WIDTH+this.WIDTH*(y-1))-1] = 0;
            this.PLANE[this.WIDTH-1][y] = temparray[y];
        }
    }

    pscrollUp() {
        let temparray = new Array(this.WIDTH);
        for (let x = 0; x < this.WIDTH; x++) {
            //this.PLANE[(this.WIDTH+this.WIDTH*(y-1))-1] = 255;
            temparray[x] = this.PLANE[x][this.HEIGHT-1];
        }
        for (let y = this.HEIGHT; y > 0; y--) {
            for (let x = 0; x < this.WIDTH; x++) {
                //this.PLANE[(x+this.WIDTH*(y-1))-1] = this.PLANE[(x+this.WIDTH*(y-1))];
                this.PLANE[x][y] = this.PLANE[x][y-1];
            }
        }
        for (let x = 0; x < this.WIDTH; x++) {
            //this.PLANE[(this.WIDTH+this.WIDTH*(y-1))-1] = 0;
            this.PLANE[x][0] = temparray[x];
        }
    }

    pscrollDown() {
        let temparray = new Array(this.WIDTH);
        for (let x = 0; x < this.WIDTH; x++) {
            //this.PLANE[(this.WIDTH+this.WIDTH*(y-1))-1] = 255;
            temparray[x] = this.PLANE[x][0];
        }
        for (let y = 0; y < this.HEIGHT; y++) {
            for (let x = 0; x < this.WIDTH; x++) {
                //this.PLANE[(x+this.WIDTH*(y-1))-1] = this.PLANE[(x+this.WIDTH*(y-1))];
                this.PLANE[x][y] = this.PLANE[x][y+1];
            }
        }
        for (let x = 0; x < this.WIDTH; x++) {
            //this.PLANE[(this.WIDTH+this.WIDTH*(y-1))-1] = 0;
            this.PLANE[x][this.HEIGHT-1] = temparray[x];
        }
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