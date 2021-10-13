const transpose = m => m[0].map((x,i) => m.map(x => x[i]));
class DISPLAY {
    #LOCK;

    constructor(width, height) {
        this.WIDTH = width;
        this.HEIGHT = height;
        // this.PLANE = new Array(width * height).fill(0);
        this.PLANE = new Array(width).fill("").map(element => new Array(height).fill(""));
        this.ZOOM = 0;
        this.#LOCK;
    }

    to1D(x, y) {
        return y * this.WIDTH + x;
    }

    to2D(c) {
        return c
    }

    iterate(func, domain) {
        for (let i = 0; i < this.WIDTH; i++) {
            for (let j = 0; i < this.HEIGHT; j++) {
                if (domain(i)(j)) {
                    this.PLANE[i][j] = func(i)(j);
                }
            }
        }

        // this.PLANE.map((e1, i1) => e1.map((e2, i2) => ))
    }

    to2DArray() {
        let tempArr = [[]];
        for (let i = 0; i < this.WIDTH; i++) {
            for (let j = 0; j < this.HEIGHT; j++) {
                tempArr[i] = [];
                tempArr[i][j] = this.PLANE[this.to1D(i, j)];
            }
        }
        return tempArr;
    }

    putPixel(x, y, color) {
        this.PLANE[this.to1D(x, y)] = color;
    }

    line(x1, y1, x2, y2, color) {
        // const f = x => y => Math.sign((y2-y1)*x + (x1-x2)*y + (x2*y1-x1*y2));
        const f = x => y => (x - x2) * (y2 - y1) - (x2 - x1) * (y - y2);
        const A2 = (x2 - x1) ** 2 + (y2 - y1) ** 2;
        
        for (let i = 0; i < this.WIDTH; i++) {
            for (let j = 0; j < this.HEIGHT; j++) {
                let B2 = (i - x1) ** 2 + (j - y1) ** 2;
                let C2 = (x2 - i) ** 2 + (y2 - j) ** 2;

                if (A2 + B2 - C2 >= 0 && A2 + C2 - B2 >= 0 && 4 * (f(i)(j) ** 2 ) - A2 <= 0) {
                    this.PLANE[i][j] = "█";
                }
            }
        }
        // console.log(this.PLANE.map(element => element.join(" ")).join("\n").replaceAll("-1","⎯").replaceAll("1","|"));
        // console.log(transpose(this.PLANE).map(element => element.join(" "))
        //     .join("\n").replaceAll("-1", "-").replaceAll("1", "+"));
        console.log(transpose(this.PLANE).map(element => element.join(" "))
            .join("\n").replaceAll("0", " ").replaceAll("1", "+"));
    }

    circle(x1, y1, diameter, color) {
        //this should work correctly now
        //this can be optimised, but i don't want to mess with it too much
        //because something might break
        let radius = diameter / 2;
        for (let i = 0; i < this.WIDTH; i++) {
            for (let j = 0; j < this.HEIGHT; j++) {
                if (diameter % 2 === 0) {
                    if (((i - x1 + 0.5) ** 2 + (j - y1 + 0.5) ** 2) <= radius ** 2) {
                        this.PLANE[i][j] = color;
                    }
                } else {
                    if (((i - x1) ** 2 + (j - y1) ** 2) <= radius ** 2) {
                        this.PLANE[i][j] = color;
                    }
                }

                // this.PLANE[i][j] = (i - x1)**2 + (j - y1)**2 - radius**2;
            }
        }
        // console.log(this.PLANE.map(element => element.join(" ")).join("\n").replaceAll("-1","-").replaceAll("1","+"));
    }

    rectangle(x1, y1, x2, y2, color) {
        // for (let i = x1; i < x2; i++) {
        //     for (let j = y1; j < y2; j++) {
        //         this.putPixel(i, j, color);
        //     }
        // }

        //the repetition here is deliberate as it allows for further simplification
        for (let i = 0; i < this.WIDTH; i++) {
            for (let j = 0; j < this.HEIGHT; j++) {
                if (i >= x1 && i <= x2 && j >= y1 && j <= y2) {
                    this.PLANE[i][j] = color;
                }
            }
        }
    }

    clear(color) {
        // return this.PLANE.map(element1 => element1.map(element2 => color));
        this.PLANE = this.PLANE.map(element1 => element1.map(element2 => color));
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

// if(![f(i)(j),f(i)(j+1),f(i+1)(j),f(i+1)(j+1)].every((v, i, arr) => v === arr[0]) && f(i)(j) !== 0) {
//     this.PLANE[Math.floor(i)][Math.floor(j)] = color;
// }


let hello = new DISPLAY(65, 65);
hello.circle(0, 0, 40, 5);

console.log(hello.PLANE.map(element => element.join(" ")).join("\n").replaceAll("5", "■"));
console.log(hello.PLANE.map(element => element.join(" ")).join("\n").replaceAll("5", "■").replaceAll("0", " "))


// console.log(hello.PLANE.map(element => element.join(" ")).join("\n").replaceAll("5","█").replaceAll(" █","██").replaceAll("0█","0 "));
console.log(hello.PLANE.map(element => element.join(" ")).join("\n")
    .replaceAll("5", "█")
    .replaceAll(" █", "██")
    .replaceAll("0█", "0 ")
    .replaceAll("0", " "));

console.log(hello.PLANE.map(element => element.join(" ")).join("\n").replaceAll("-1", "⎯").replaceAll("1", "|"))

let dsp = new DISPLAY();

function scroll(string) {
    if (preserve === true) {
        switch (string) {
            case "up":
                dsp.scrollUp();
                break;
            case "down":
        }
    }
}

for (let j = f(i) + 1; j < f(i + 1) && f(i + 1) <= f(x2); j++) {
    test[j][i] = 1;
}