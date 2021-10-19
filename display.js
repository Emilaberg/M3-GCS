const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// canvas.width = "1000";
// canvas.height = "1000";

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerWidth;


// Alla tecken/bokstäver, uppritade i 1 dimensionell array. Bredd: 7, Höjd: 8.
let chars = {
    A: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    B: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    C: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    D: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 0, 0, 0,
        0, 1, 0, 0, 1, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 1, 0, 0,
        0, 1, 1, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    E: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    F: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    G: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 1, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    H: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    I: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    J: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    K: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 1, 0, 0,
        0, 1, 0, 1, 0, 0, 0,
        0, 1, 0, 1, 0, 0, 0,
        0, 1, 1, 1, 0, 0, 0,
        0, 1, 0, 0, 1, 0, 0,
        0, 1, 0, 0, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    L: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    M: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 1, 0, 1, 1, 0,
        0, 1, 0, 1, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    N: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 1, 0, 0, 1, 0,
        0, 1, 0, 1, 0, 1, 0,
        0, 1, 0, 0, 1, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    O: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    P: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    Q: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    R: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    S: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 1, 1, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    T: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    U: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    V: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    W: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 1, 0, 1, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    X: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 1, 1, 0, 1, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    Y: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    Z: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 1, 1, 0,
        0, 0, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 0, 0,
        0, 1, 1, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    0: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    1: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 1, 1, 0, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    2: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 1, 1, 0, 1, 1, 0,
        0, 0, 0, 0, 1, 1, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 1, 1, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    3: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 0, 1, 1, 0, 0, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    4: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 1, 1, 0, 1, 0, 0,
        0, 1, 0, 0, 1, 0, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    5: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 1, 1, 0,
        0, 1, 1, 0, 1, 1, 0,
        0, 1, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    6: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 1, 1, 0, 1, 1, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    7: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    8: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    9: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 1, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    '.': [0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    ',': [0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    ';': [0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 1, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    ':': [0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    '$': [0, 0, 0, 1, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 1, 0, 1, 0, 1, 0,
        0, 1, 0, 1, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 1, 0, 1, 0,
        0, 1, 1, 1, 1, 0, 0,
        0, 0, 0, 1, 0, 0, 0],

    ';': [0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    ';': [0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    '!': [0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    ' ': [0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    a: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    b: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    c: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    d: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 1, 0,
        0, 0, 0, 1, 1, 1, 0,
        0, 0, 1, 0, 0, 1, 0,
        0, 0, 0, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    e: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    f: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 1, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    g: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 1, 0,
        0, 0, 1, 0, 0, 1, 0,
        0, 0, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 1, 0,
        0, 0, 0, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    h: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 0, 0, 0,
        0, 1, 0, 0, 1, 0, 0,
        0, 1, 0, 0, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    i: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    j: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 1, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    k: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 1, 0, 0, 0,
        0, 1, 0, 1, 0, 0, 0,
        0, 1, 0, 1, 0, 0, 0,
        0, 1, 1, 0, 0, 0, 0,
        0, 1, 0, 1, 0, 0, 0,
        0, 1, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    l: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    m: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 1, 0, 0, 0,
        0, 1, 1, 1, 1, 0, 0,
        0, 1, 0, 1, 0, 1, 0,
        0, 1, 0, 1, 0, 1, 0,
        0, 1, 0, 1, 0, 1, 0,
        0, 1, 0, 1, 0, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    n: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 1, 1, 0, 0,
        0, 1, 1, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    o: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    p: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 0, 0, 0,
        0, 1, 0, 0, 1, 0, 0,
        0, 1, 1, 1, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    q: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 1, 1, 0,
        0, 0, 1, 0, 0, 1, 0,
        0, 0, 0, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    r: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 1, 1, 0, 0,
        0, 1, 1, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    s: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 1, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    t: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    u: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    v: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    w: [0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 1, 0, 1, 0,
        0, 1, 0, 1, 0, 1, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    x: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    y: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 1, 0, 1, 1, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 1, 1, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    z: [0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 1, 1, 0,
        0, 0, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 0, 0,
        0, 1, 1, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0],

    '"': [
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 0, 1, 0, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0
    ],

    '/': [
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 1, 0, 0, 0, 0,
        0, 0, 1, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0
    ],

    '?': [
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 1, 1, 0,
        0, 0, 1, 0, 0, 1, 0,
        0, 0, 0, 0, 1, 1, 0,
        0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0
    ],

    '%': [
        0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 0, 0, 1, 0,
        0, 1, 1, 0, 1, 1, 0,
        0, 0, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 0, 0,
        0, 1, 1, 0, 1, 1, 0,
        0, 1, 0, 0, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0
    ],

    '&': [
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 0, 0, 0,
        0, 1, 0, 0, 1, 0, 0,
        0, 1, 0, 0, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 0,
        0, 1, 0, 0, 1, 0, 0,
        0, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0
    ],

    '(': [
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 1, 0, 0, 0, 0,
        0, 0, 1, 0, 0, 0, 0,
        0, 0, 1, 0, 0, 0, 0,
        0, 0, 1, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0],

    ')': [
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0
    ],

    '@': [
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        0, 1, 0, 1, 1, 1, 0,
        0, 1, 0, 1, 0, 1, 0,
        0, 1, 0, 1, 1, 1, 0,
        0, 0, 1, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0
    ],
}

class BITMAP {                                                                                  //Class BITMAP
    constructor(width, height) {                                                                                    
        this.WIDTH = width;
        this.HEIGHT = height;
        this.PLANE =  new Array(width).fill(0).map(() => new Array(height).fill(0));            //Plane - 2 dimensionell array 
    }

    bitmapMaker(character) {                                                                    //Används för att skriva ut tecken/bokstäver
        let q = character.length;                                                               //q = antalet tecken/bokstäver
        let bitmap = new Array(8).fill(0).map(() => new Array(7 * q).fill(0));                  //bitmap - en array. Höjd: 8 (chars höjd), bredd: 7 multiplicerat med antalet tecken.

        for (let a = 0; a < q; a++) {                                                           //För varje tecken ska loopen köras.
            for (let i = 0; i < 7; i++) {                                                       //Loopen körs för varje kolumn för ett tecken/bokstav (7 gånger)
                for (let j = 0; j < 8; j++) {                                                   //Loopen körs för varje rad för ett tecken bokstav (8 gånger)
                    bitmap[j][i + (7 * a)] = chars[character[a]][j * 7 + i];                    //bitmapArray för x och y, om ett eller flera tecken redan har körst så kommer exempelvis x=0 + 7*1, detta görs för att flera tecken ska kunna skrivas bredvid varandra, utan att köra över. 
                }                                                                               //chars[character[a]][j * 7 + i] - chars[för tecken/bokstav[där vi står]][koordinater]
            }
        }
        this.PLANE = bitmap;                                                                    //PLANE = bitmap
        this.HEIGHT = 8;
        this.WIDTH = 7 * q;
        console.log(bitmap);
    }
}

class DISPLAY {
    #LOCK;

    constructor(width, height) {
        this.WIDTH = width;
        this.HEIGHT = height;
        this.PLANE = new Array(width * height).fill(0);
        // this.PLANE = new Array(width).fill(0).map(element => new Array(height).fill(0));
        this.ZOOM = 0;
        this.#LOCK;
    }

    to1D(x, y) {
        return y * this.WIDTH + x;
    }

    to2D(c) {
        return c
    }

    gridMap(func) {
        for (let x = 0; x < this.WIDTH; x++) {
            for (let y = 0; y < this.HEIGHT; y++) {
                this.PLANE[this.to1D(x)(y)] = func(i)(j);
            }
        }
    }

    to2DArray() {
        let tempArr = [[]];
        for (let i = 0; i < this.WIDTH; i++) {
            tempArr[i] = [];
            for (let j = 0; j < this.HEIGHT; j++) {
                
                tempArr[i][j] = this.PLANE[this.to1D(i, j)];
                // this.PLANE
                this.to2DArray()
            }
        }
        return tempArr;
    }

    putPixel(x, y, color) {
        this.PLANE[this.to1D(x, y)] = color;
    }

    line(x1, y1, x2, y2, color) {
        const f = x => y => (y2-y1)*x + (x1-x2)*y + (x2*y1-x1*y2);
        // const f = x => y => (x - x2) * (y2 - y1) - (x2 - x1) * (y - y2);
        const A2 = (x2 - x1) ** 2 + (y2 - y1) ** 2;

        for (let i = 0; i < this.WIDTH; i++) {
            for (let j = 0; j < this.HEIGHT; j++) {
                let B2 = (i - x1) ** 2 + (j - y1) ** 2;
                let C2 = (x2 - i) ** 2 + (y2 - j) ** 2;

                if (A2 + B2 - C2 >= 0 && A2 + C2 - B2 >= 0 && 4*(f(i)(j) ** 2) - A2 < 0) {
                    this.putPixel(i,j,color);
                }
            }
        }
    }

    circle(x1, y1, diameter, color) {
        let radius = diameter / 2;
        for (let i = 0; i < this.WIDTH; i++) {
            for (let j = 0; j < this.HEIGHT; j++) {
                if (diameter % 2 === 0) {
                    if (((i - x1 + 0.5) ** 2 + (j - y1 + 0.5) ** 2) - radius ** 2 <= 0) {
                        this.putPixel(i,j,color);
                    }
                } else {
                    if (((i - x1) ** 2 + (j - y1) ** 2) - radius ** 2 <= 0) {
                        this.putPixel(i,j,color);
                    }
                }                
            }
        }
    }

    rectangle(x1, y1, x2, y2, color) {
        // for (let i = x1; i < x2; i++) {
        //     for (let j = y1; j < y2; j++) {
        //         this.putPixel(i, j, color);
        //     }
        // }
        for (let i = 0; i < this.WIDTH; i++) {
            for (let j = 0; j < this.HEIGHT; j++) {
                if (i >= x1 && i <= x2 && j >= y1 && j <= y2) {
                    this.PLANE[this.to1D(i, j)] = color;
                }
            }
        }
    }

    clear(color) {
        this.PLANE = this.PLANE.map(() => color);
    }

    resize(width, height) {
        this.PLANE = new Array(width * height).fill(0);
        this.WIDTH = width;
        this.HEIGHT = height;
        // return new DISPLAY(width, height);
    }

    blitToDisplay(BITMAp, width, height, bx, by, dx, dy) {
        for (let i = bx; i < bx+width; i++) {
            for (let j = by; j < by+height; j++) {
                this.PLANE[this.to1D(i-bx+dx,j-by+dy)] = BITMAp.PLANE[i][j];
                console.log(BITMAp);
                this.render();
            }
        }

        // if(dx-width < -1 || dy-height < -1){
        //     alert('Error');
        //     return;
        // }
        
        // let temp = new BITMAP(width+bx, height+by);
        // for (let x = bx-(width-1); x <= bx; x++) {
        //     for (let y = by-(height-1); y <= by; y++) {

        //         this.PLANE[this.to1D(x, y)] = temp.PLANE[dx+x][dy+y];
                
        //     }
        // }
        // console.log(this.PLANE);
        // console.log(temp.PLANE);
    }

    blitToBitmap(width, height,bx, by, dx, dy) {                        //width, height - Bredd och höjd för det valda området. bx, by - startkoordinater på bitmap. dx, dy - slutkoordinater på display

        if(dx-width < -1 || dy-height < -1){                            //Felhantering, om värdena är större än displayen
            alert('Error!');
            return;
        }

        let a = by;                                                     //Lagrar by (by kommer att förändras längre ned)
        
        let temp = new BITMAP(width+bx, height+by);                     //temp array i BITMAP, där kopian läggs
        for (let x = dx-(width-1); x <= dx; x++) {                      // för alla valda kolumner (x-värden)
            for (let y = dy-(height-1); y <= dy; y++) {                 // för alla valda rader (y-värden), inom det valda x-området

                temp.PLANE[bx][by] = this.PLANE[this.to1D(x, y)];       // Kopierar det valda området till den temporära array'n.

                by++;                                                   //by adderas med 1 för att ändra y-position för bitmap
                if(by == a+height){                                     //En if-sats som gör så att by börjar om för att raderna på en ny kolumn ska bli samma som tidigare
                    by = a;
                }
                
            }
            bx++;                                                       //bx adderas med 1 för att "byta" kolumn
        }
        BITMAP.PLANE = temp.PLANE;                                      //Bitmap plane ska bli lika med den temporära arrayn
        console.log(this.PLANE);                                        
        console.log(temp.PLANE);
        return temp;                                                    //Returnerar temp

                                                                        // Översiktlig förklaring: Först går man igenom den första valda kolumn för området, sedan går man igenom alla rader på den kolumn som har valts, sedan går man vidare till nästa kolumn osv...
                                                                        // Alla de koordinater kopieras sedan till temp, med en start på koordinat (bx,by).
        
    }

    textOut(x, y, color, string) {
        let temp = new BITMAP();
        temp.bitmapMaker(string);

        for (let i = x; i < this.WIDTH && i - x < temp.WIDTH; i++) {
            for (let j = y; j < this.HEIGHT && j - y < temp.HEIGHT; j++) {
                if (temp.PLANE[j - y][i - x] === 1) {
                    this.PLANE[this.to1D(i, j)] = color;
                }
            }
        }
    }

    scrollLeft2() {
        for (let i = 1; i < this.WIDTH; i++) {
            for (let j = 0; j < this.HEIGHT; j++) {
                this.PLANE[this.to1D(i-1,j)] = this.PLANE[this.to1D(i,j)];
            }
        }
        for(let i = 0; i < this.HEIGHT; i++) {
            this.PLANE[this.to1D(this.WIDTH-1,i)] = this.PLANE[i];
        }
    }

    modulo(a,b) {
        return a - b*Math.floor(a/b);
    }
        
    scrollLeftx() {
        for (let x = 0; x < this.WIDTH; x++) {
            for (let y = 0; y < this.HEIGHT; y++) {
                this.PLANE[this.to1D(this.modulo(x-1,this.WIDTH),y)] = this.PLANE[this.to1D(x,y)];
            }
        }
    }

    // scrollRight() {
    //     for (let x = 0; x < this.WIDTH; x++) {
    //         for (let y = 0; y < this.HEIGHT; y++) {
    //             this.PLANE[this.to1D(this.modulo(x+1,this.WIDTH-1),y)] = this.PLANE[this.to1D(x,y)];
    //         }
    //     }
    //}

    scrollLeft() {
        for (let x = 1; x <= this.WIDTH; x++) {
            for (let y = 1; y <= this.HEIGHT; y++) {
                this.PLANE[(x+this.WIDTH*(y-1))-1] = this.PLANE[(x+this.WIDTH*(y-1))];
            }
        }
        for (let y = 1; y <= this.HEIGHT; y++) {
            this.PLANE[(this.WIDTH+this.WIDTH*(y-1))-1] = 0;
        }
    }

    scrollRight() {
        for (let x = this.WIDTH; x > 1; x--) {
            for (let y = 1; y <= this.HEIGHT; y++) {
                this.PLANE[(x+this.WIDTH*(y-1))-1] = this.PLANE[(x+this.WIDTH*(y-1))-2];
            }
        }
        for (let y = 1; y <= this.HEIGHT; y++) {
            this.PLANE[(1+this.WIDTH*(y-1))-1] = 0;
        }
    }

    scrollUp() {
        for (let y = 0; y < this.HEIGHT-1; y++) {
            for (let x = 0; x < this.WIDTH; x++) {
                this.PLANE[this.to1D(x, y)] = this.PLANE[this.to1D(x, y+1)];
            }
        }
        for(let x = 0; x < this.WIDTH; x++){
            // this.PLANE[x][this.HEIGHT - 1] = 0;
            this.PLANE[this.to1D(x, this.HEIGHT - 1)] = 0;
        }
    }

    scrollDown() {
        for (let y = this.HEIGHT; y > 0; y--) {
            for (let x = 0; x < this.WIDTH; x++) {
                this.PLANE[this.to1D(x, y)] = this.PLANE[this.to1D(x, y -1)];
            }
        }
        for(let x = 0; x < this.WIDTH; x++){
            this.PLANE[this.to1D(x, 0)] = 0;
        }
    }

    pscrollLeft() {
        let temparray = new Array(this.WIDTH);
        for (let y = 1; y <= this.HEIGHT; y++) {
            temparray[y-1] = this.PLANE[(1+this.WIDTH*(y-1))-1];
        }
        for (let x = 1; x <= this.WIDTH; x++) {
            for (let y = 1; y <= this.HEIGHT; y++) {
                this.PLANE[(x+this.WIDTH*(y-1))-1] = this.PLANE[(x+this.WIDTH*(y-1))];
            }
        }
        for (let y = 1; y <= this.HEIGHT; y++) {
            this.PLANE[(this.WIDTH+this.WIDTH*(y-1))-1] = temparray[y-1];
        }
    }

    pscrollRight() {
        let temparray = new Array(this.WIDTH);
        for (let y = 1; y <= this.HEIGHT; y++) {
            temparray[y-1] = this.PLANE[(this.WIDTH+this.WIDTH*(y-1))-1]
        }
        for (let x = this.WIDTH; x > 1; x--) {
            for (let y = 1; y <= this.HEIGHT; y++) {
                this.PLANE[(x+this.WIDTH*(y-1))-1] = this.PLANE[(x+this.WIDTH*(y-1))-2];
            }
        }
        for (let y = 1; y <= this.HEIGHT; y++) {
            this.PLANE[(1+this.WIDTH*(y-1))-1] = temparray[y-1];
        }
    }

    pscrollUp() {
        let temparray = new Array(this.HEIGHT);
        for(let x = 0; x < this.WIDTH; x++){
            temparray[x] = this.PLANE[this.to1D(x, 0)];
        }
        for (let y = 0; y < this.HEIGHT-1; y++) {
            for (let x = 0; x < this.WIDTH; x++) {
                this.PLANE[this.to1D(x, y)] = this.PLANE[this.to1D(x, y+1)];
            }
        }
        for(let x = 0; x < this.WIDTH; x++){
            this.PLANE[this.to1D(x, this.HEIGHT - 1)] = temparray[x];
        }
    }

    pscrollDown() {
        let temparray = new Array(this.HEIGHT);
        for(let x = 0; x < this.WIDTH; x++){
            temparray[x] = this.PLANE[this.to1D(x, this.HEIGHT - 1)];
        }
        for (let y = this.HEIGHT; y > 0; y--) {
            for (let x = 0; x < this.WIDTH; x++) {
                this.PLANE[this.to1D(x, y)] = this.PLANE[this.to1D(x, y -1)];
            }
        }
        for(let x = 0; x < this.WIDTH; x++){
            this.PLANE[this.to1D(x, 0)] = temparray[x];
        }
    }

    render() {
        let dx = Math.round(canvas.width / this.WIDTH);
        let dy = Math.round(canvas.height / this.HEIGHT);
        for (let i = 0; i < this.WIDTH; i++) {
            for (let j = 0; j < this.HEIGHT; j++) {
                ctx.fillStyle = 'rgb(' + this.PLANE[this.to1D(i, j)] + ',' + this.PLANE[this.to1D(i, j)] + ',' + this.PLANE[this.to1D(i, j)] + ')';
                ctx.fillRect(i * dx, j * dy, dx, dy);
            }
        }
    }
}

// let hello = new DISPLAY(window.innerWidth,window.innerHeight);

let hello = new DISPLAY(50,50);
// hello.circle(0, 0, 40, 5);
let presActive = false;
function presBtn() {
    presActive = !presActive;
}

window.addEventListener('load', () => {
    // hello.render();
    
    // hello.line(0,0,0,10,255);
    // hello.line(0,0,10,0,255);
    // hello.line(10,0,10,10,255);
    // hello.line(0,10,10,10,255);
    // hello.textOut(1, 1, 255, "M");
    // hello.textOut(10, 10, 200, "test test test");
    // hello.circle(145, 145, 50, 255);
    // hello.rectangle(190, 190, 210, 210, 230);
    // hello.line(190, 190, 450, 450, 200);
    // hello.line(450, 450, 470, 430, 200);
    // hello.line(0, 4, 4, 0, 100);
    // hello.rectangle(0, 5, 5, 8, 255);
    // hello.rectangle(4,6,0,9,255);
    // hello.line(0, 0, 10, 10, 255);
    // hello.line(450, 450, 430, 445, 200);
    // hello.line(0, 0, 10, 10, 255);
    // hello.putPixel(40,40,255);
    hello.render();
})

// För varje gång som trycker på en av pil-tangenterna så ska scroll köras i samma riktning som pilen, om preserve = true, ska pScroll köras

window.addEventListener('keydown', (event) => {
    if (presActive == false) {
        if(event.key == 'ArrowLeft') {
            hello.pscrollLeft();
        }
        if(event.key == 'ArrowRight') {
            hello.pscrollRight();
        }
        if(event.key == 'ArrowDown') {
            hello.pscrollDown();
        }
        if(event.key == 'ArrowUp') {
            hello.pscrollUp();
        }
    }
    else {
        if(event.key == 'ArrowLeft') {
            hello.scrollLeft();
        }
        if(event.key == 'ArrowRight') {
            hello.scrollRight();
        }
        if(event.key == 'ArrowDown') {
            hello.scrollDown();
        }
        if(event.key == 'ArrowUp') {
            hello.scrollUp();
        }
    }
    hello.render();
})

function render() {
//     hello.rectangle(8, 8, 9, 9, 255);
//     hello.textOut(450, 450, 255, "jag vet inte 123456789");
//     hello.textOut(10, 10, 200, "test test test");
//     hello.circle(145, 145, 50, 255);
//     hello.rectangle(190, 190, 210, 210, 230);
//     hello.line(190, 190, 450, 450, 200);
//     hello.line(450, 450, 470, 430, 200);
//     hello.line(450, 450, 430, 445, 200);
//     hello.line(0, 0, 10, 10, 255);
//     hello.putPixel(40,40,255);
    hello.render();
    requestAnimationFrame(render);
}
requestAnimationFrame(render);
