const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = "1000";
canvas.height = "1000";

let chars = {
    A: [0,0,0,0,0,0,0,
        0,0,0,1,0,0,0,
        0,0,1,0,1,0,0,
        0,0,1,0,1,0,0,
        0,1,1,1,1,1,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,0,0,0,0,0,0],

    B: [0,0,0,0,0,0,0,
        0,1,1,1,1,0,0,
        0,1,0,0,0,1,0,
        0,1,1,1,1,0,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,1,1,1,1,0,0,
        0,0,0,0,0,0,0],

    C: [0,0,0,0,0,0,0,
        0,0,1,1,1,0,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,0,0,
        0,1,0,0,0,0,0,
        0,1,0,0,0,1,0,
        0,0,1,1,1,0,0,
        0,0,0,0,0,0,0],

    D: [0,0,0,0,0,0,0,
        0,1,1,1,0,0,0,
        0,1,0,0,1,0,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,1,0,0,1,0,0,
        0,1,1,1,0,0,0,
        0,0,0,0,0,0,0],

    E: [0,0,0,0,0,0,0,
        0,1,1,1,1,1,0,
        0,1,0,0,0,0,0,
        0,1,0,0,0,0,0,
        0,1,1,1,1,0,0,
        0,1,0,0,0,0,0,
        0,1,1,1,1,1,0,
        0,0,0,0,0,0,0],

    F: [0,0,0,0,0,0,0,
        0,1,1,1,1,1,0,
        0,1,0,0,0,0,0,
        0,1,0,0,0,0,0,
        0,1,1,1,0,0,0,
        0,1,0,0,0,0,0,
        0,1,0,0,0,0,0,
        0,0,0,0,0,0,0],

    G: [0,0,0,0,0,0,0,
        0,1,1,1,1,1,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,0,0,
        0,1,0,0,1,1,0,
        0,1,0,0,0,1,0,
        0,1,1,1,1,1,0,
        0,0,0,0,0,0,0],

    H: [0,0,0,0,0,0,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,1,1,1,1,1,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,0,0,0,0,0,0],
        
    I: [0,0,0,0,0,0,0,
        0,0,1,1,1,0,0,
        0,0,0,1,0,0,0,
        0,0,0,1,0,0,0,
        0,0,0,1,0,0,0,
        0,0,0,1,0,0,0,
        0,0,1,1,1,0,0,
        0,0,0,0,0,0,0],

    J: [0,0,0,0,0,0,0,
        0,0,1,1,1,1,0,
        0,0,0,0,1,0,0,
        0,0,0,0,1,0,0,
        0,0,0,0,1,0,0,
        0,0,1,0,1,0,0,
        0,0,0,1,0,0,0,
        0,0,0,0,0,0,0],

    K: [0,0,0,0,0,0,0,
        0,1,0,0,1,0,0,
        0,1,0,1,0,0,0,
        0,1,0,1,0,0,0,
        0,1,1,1,0,0,0,
        0,1,0,0,1,0,0,
        0,1,0,0,1,0,0,
        0,0,0,0,0,0,0],

    L: [0,0,0,0,0,0,0,
        0,1,0,0,0,0,0,
        0,1,0,0,0,0,0,
        0,1,0,0,0,0,0,
        0,1,0,0,0,0,0,
        0,1,0,0,0,1,0,
        0,1,1,1,1,1,0,
        0,0,0,0,0,0,0],

    M: [0,0,0,0,0,0,0,
        0,1,0,0,0,1,0,
        0,1,1,0,1,1,0,
        0,1,0,1,0,1,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,0,0,0,0,0,0],

    N: [0,0,0,0,0,0,0,
        0,1,0,0,0,1,0,
        0,1,1,0,0,1,0,
        0,1,0,1,0,1,0,
        0,1,0,0,1,1,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,0,0,0,0,0,0],

    O: [0,0,0,0,0,0,0,
        0,0,1,1,1,0,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,0,1,1,1,0,0,
        0,0,0,0,0,0,0],

    P: [0,0,0,0,0,0,0,
        0,1,1,1,1,0,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,1,1,1,1,0,0,
        0,1,0,0,0,0,0,
        0,1,0,0,0,0,0,
        0,0,0,0,0,0,0],

    Q: [0,0,0,0,0,0,0,
        0,0,1,1,1,0,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,0,1,1,1,1,0,
        0,0,0,0,0,0,0],

    R: [0,0,0,0,0,0,0,
        0,1,1,1,1,0,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,1,1,1,1,0,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,0,0,0,0,0,0],

    S: [0,0,0,0,0,0,0,
        0,0,1,1,1,0,0,
        0,1,1,0,0,1,0,
        0,1,0,0,0,0,0,
        0,1,1,1,1,0,0,
        0,0,0,0,0,1,0,
        0,1,1,1,1,0,0,
        0,0,0,0,0,0,0],

    T: [0,0,0,0,0,0,0,
        0,1,1,1,1,1,0,
        0,0,0,1,0,0,0,
        0,0,0,1,0,0,0,
        0,0,0,1,0,0,0,
        0,0,0,1,0,0,0,
        0,0,0,1,0,0,0,
        0,0,0,0,0,0,0],

    U: [0,0,0,0,0,0,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,0,1,1,1,0,0,
        0,0,0,0,0,0,0],

    V: [0,0,0,0,0,0,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,0,1,0,1,0,0,
        0,0,1,0,1,0,0,
        0,0,0,1,0,0,0,
        0,0,0,1,0,0,0,
        0,0,0,0,0,0,0],

    W: [0,0,0,0,0,0,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,1,0,1,0,1,0,
        0,0,1,0,1,0,0,
        0,0,0,0,0,0,0],

    X: [0,0,0,0,0,0,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,0,1,0,1,0,0,
        0,0,0,1,0,0,0,
        0,1,1,0,1,1,0,
        0,1,0,0,0,1,0,
        0,0,0,0,0,0,0],

    Y: [0,0,0,0,0,0,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,0,1,0,1,0,0,
        0,0,0,1,0,0,0,
        0,0,0,1,0,0,0,
        0,0,0,1,0,0,0,
        0,0,0,0,0,0,0],

    Z: [0,0,0,0,0,0,0,
        0,1,1,1,1,1,0,
        0,0,0,0,1,1,0,
        0,0,0,1,1,0,0,
        0,0,1,1,0,0,0,
        0,1,1,0,0,0,0,
        0,1,1,1,1,1,0,
        0,0,0,0,0,0,0],

    0: [0,0,0,0,0,0,0,
        0,0,1,1,1,0,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,0,1,1,1,0,0,
        0,0,0,0,0,0,0],

    1: [0,0,0,0,0,0,0,
        0,0,0,0,1,0,0,
        0,0,0,1,1,0,0,
        0,0,1,0,1,0,0,
        0,0,0,0,1,0,0,
        0,0,0,0,1,0,0,
        0,0,0,0,1,0,0,
        0,0,0,0,0,0,0],

    2: [0,0,0,0,0,0,0,
        0,0,1,1,1,0,0,
        0,1,1,0,1,1,0,
        0,0,0,0,1,1,0,
        0,0,1,1,1,0,0,
        0,1,1,0,0,0,0,
        0,1,1,1,1,1,0,
        0,0,0,0,0,0,0],

    3: [0,0,0,0,0,0,0,
        0,1,1,1,1,1,0,
        0,0,0,0,1,0,0,
        0,0,1,1,0,0,0,
        0,0,0,0,1,0,0,
        0,1,0,0,0,1,0,
        0,0,1,1,1,0,0,
        0,0,0,0,0,0,0],

    4: [0,0,0,0,0,0,0,
        0,0,1,1,1,0,0,
        0,0,1,0,1,0,0,
        0,1,1,0,1,0,0,
        0,1,0,0,1,0,0,
        0,1,1,1,1,1,0,
        0,0,0,0,1,0,0,
        0,0,0,0,0,0,0],

    5: [0,0,0,0,0,0,0,
        0,1,1,1,1,0,0,
        0,1,0,0,0,0,0,
        0,1,1,1,1,0,0,
        0,0,0,0,1,1,0,
        0,1,1,0,1,1,0,
        0,1,1,1,1,0,0,
        0,0,0,0,0,0,0],

    6: [0,0,0,0,0,0,0,
        0,0,1,1,1,0,0,
        0,1,1,0,1,1,0,
        0,1,0,0,0,0,0,
        0,1,1,1,1,1,0,
        0,1,0,0,0,1,0,
        0,1,1,1,1,1,0,
        0,0,0,0,0,0,0],

    7: [0,0,0,0,0,0,0,
        0,1,1,1,1,1,0,
        0,1,0,0,0,1,0,
        0,0,0,0,0,1,0,
        0,0,0,0,1,0,0,
        0,0,0,0,1,0,0,
        0,0,0,0,1,0,0,
        0,0,0,0,0,0,0],

    8: [0,0,0,0,0,0,0,
        0,0,1,1,1,0,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,0,1,1,1,0,0,
        0,1,0,0,0,1,0,
        0,0,1,1,1,0,0,
        0,0,0,0,0,0,0],

    9: [0,0,0,0,0,0,0,
        0,0,1,1,1,0,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,0,1,1,1,1,0,
        0,0,0,0,0,1,0,
        0,0,1,1,1,0,0,
        0,0,0,0,0,0,0],

  '.': [0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,
        0,0,0,1,0,0,0,
        0,0,0,0,0,0,0],

  ',': [0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,
        0,0,0,0,1,0,0,
        0,0,0,1,1,0,0,
        0,0,0,0,0,0,0],

    ';':   [0,0,0,0,0,0,0,
            0,0,0,1,0,0,0,
            0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,
            0,0,0,1,0,0,0,
            0,0,1,1,0,0,0,
            0,0,0,0,0,0,0],

    ':':   [0,0,0,0,0,0,0,
            0,0,0,1,0,0,0,
            0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,
            0,0,0,1,0,0,0,
            0,0,0,0,0,0,0],

    '$':   [0,0,0,1,0,0,0,
            0,0,1,1,1,0,0,
            0,1,0,1,0,1,0,
            0,1,0,1,0,0,0,
            0,0,1,1,1,0,0,
            0,0,0,1,0,1,0,
            0,1,1,1,1,0,0,
            0,0,0,1,0,0,0],

    ';':   [0,0,0,0,0,0,0,
            0,0,1,0,1,0,0,
            0,1,1,1,1,1,0,
            0,0,1,0,1,0,0,
            0,0,1,0,1,0,0,
            0,1,1,1,1,1,0,
            0,0,1,0,1,0,0,
            0,0,0,0,0,0,0],

    ';':   [0,0,0,0,0,0,0,
            0,0,0,1,0,0,0,
            0,0,0,1,0,0,0,
            0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,
            0,0,0,0,0,0,0],

    '!':   [0,0,0,0,0,0,0,
            0,0,0,1,0,0,0,
            0,0,1,1,1,0,0,
            0,0,1,1,1,0,0,
            0,0,0,1,0,0,0,
            0,0,0,0,0,0,0,
            0,0,0,1,0,0,0,
            0,0,0,0,0,0,0],

empty: [0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,
        0,0,0,0,0,0,0],

    a: [0,0,0,0,0,0,0,
        0,1,1,1,1,1,0,
        0,0,0,0,0,1,0,
        0,0,0,0,0,1,0,
        0,1,1,1,1,1,0,
        0,1,0,0,0,1,0,
        0,1,1,1,1,1,0,
        0,0,0,0,0,0,0],

    b: [0,0,0,0,0,0,0,
        0,1,0,0,0,0,0,
        0,1,0,0,0,0,0,
        0,1,0,0,0,0,0,
        0,1,1,1,1,0,0,
        0,1,0,0,0,1,0,
        0,1,1,1,1,0,0,
        0,0,0,0,0,0,0],

    c: [0,0,0,0,0,0,0,
        0,0,1,1,1,0,0,
        0,1,0,0,0,0,0,
        0,1,0,0,0,0,0,
        0,1,0,0,0,0,0,
        0,1,0,0,0,0,0,
        0,0,1,1,1,0,0,
        0,0,0,0,0,0,0],

    d: [0,0,0,0,0,0,0,
        0,0,0,0,0,1,0,
        0,0,0,0,0,1,0,
        0,0,0,0,0,1,0,
        0,0,0,1,1,1,0,
        0,0,1,0,0,1,0,
        0,0,0,1,1,1,0,
        0,0,0,0,0,0,0],

    e: [0,0,0,0,0,0,0,
        0,0,1,1,1,0,0,
        0,1,0,0,0,1,0,
        0,1,1,1,1,0,0,
        0,1,0,0,0,0,0,
        0,1,0,0,0,1,0,
        0,0,1,1,1,0,0,
        0,0,0,0,0,0,0],

    f: [0,0,0,0,0,0,0,
        0,0,1,1,0,0,0,
        0,1,0,0,0,0,0,
        0,1,0,0,0,0,0,
        0,1,1,0,0,0,0,
        0,1,0,0,0,0,0,
        0,1,0,0,0,0,0,
        0,0,0,0,0,0,0],
    
    g: [0,0,0,0,0,0,0,
        0,0,1,1,1,1,0,
        0,0,1,0,0,1,0,
        0,0,1,1,1,1,0,
        0,0,0,0,0,1,0,
        0,0,0,0,0,1,0,
        0,0,0,1,1,1,0,
        0,0,0,0,0,0,0],

    h: [0,0,0,0,0,0,0,
        0,1,0,0,0,0,0,
        0,1,0,0,0,0,0,
        0,1,0,0,0,0,0,
        0,1,1,1,0,0,0,
        0,1,0,0,1,0,0,
        0,1,0,0,1,0,0,
        0,0,0,0,0,0,0],

    i: [0,0,0,0,0,0,0,
        0,0,0,1,0,0,0,
        0,0,0,0,0,0,0,
        0,0,0,1,0,0,0,
        0,0,0,1,0,0,0,
        0,0,0,1,0,0,0,
        0,0,0,1,0,0,0,
        0,0,0,0,0,0,0],

    j: [0,0,0,0,0,0,0,
        0,0,0,1,0,0,0,
        0,0,0,0,0,0,0,
        0,0,0,1,0,0,0,
        0,0,0,1,0,0,0,
        0,0,0,1,0,0,0,
        0,0,1,0,0,0,0,
        0,0,0,0,0,0,0],

    k: [0,0,0,0,0,0,0,
        0,1,0,1,0,0,0,
        0,1,0,1,0,0,0,
        0,1,0,1,0,0,0,
        0,1,1,0,0,0,0,
        0,1,0,1,0,0,0,
        0,1,0,1,0,0,0,
        0,0,0,0,0,0,0],

    l: [0,0,0,0,0,0,0,
        0,0,0,1,0,0,0,
        0,0,0,1,0,0,0,
        0,0,0,1,0,0,0,
        0,0,0,1,0,0,0,
        0,0,0,1,0,0,0,
        0,0,0,1,0,0,0,
        0,0,0,0,0,0,0],
        
    m: [0,0,0,0,0,0,0,
        0,1,0,1,0,0,0,
        0,1,1,1,1,0,0,
        0,1,0,1,0,1,0,
        0,1,0,1,0,1,0,
        0,1,0,1,0,1,0,
        0,1,0,1,0,1,0,
        0,0,0,0,0,0,0],

    n: [0,0,0,0,0,0,0,
        0,1,0,1,1,0,0,
        0,1,1,0,0,1,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,0,0,0,0,0,0],

    o: [0,0,0,0,0,0,0,
        0,0,1,1,1,0,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,0,1,1,1,0,0,
        0,0,0,0,0,0,0],

    p: [0,0,0,0,0,0,0,
        0,1,1,1,0,0,0,
        0,1,0,0,1,0,0,
        0,1,1,1,0,0,0,
        0,1,0,0,0,0,0,
        0,1,0,0,0,0,0,
        0,1,0,0,0,0,0,
        0,0,0,0,0,0,0],

    q: [0,0,0,0,0,0,0,
        0,0,0,1,1,1,0,
        0,0,1,0,0,1,0,
        0,0,0,1,1,1,0,
        0,0,0,0,0,1,0,
        0,0,0,0,0,1,0,
        0,0,0,0,0,1,0,
        0,0,0,0,0,0,0],
    
    r: [0,0,0,0,0,0,0,
        0,1,0,1,1,0,0,
        0,1,1,0,0,1,0,
        0,1,0,0,0,0,0,
        0,1,0,0,0,0,0,
        0,1,0,0,0,0,0,
        0,1,0,0,0,0,0,
        0,0,0,0,0,0,0],

    s: [0,0,0,0,0,0,0,
        0,0,1,1,1,1,0,
        0,1,0,0,0,0,0,
        0,1,0,0,0,0,0,
        0,0,1,1,1,0,0,
        0,0,0,0,0,1,0,
        0,1,1,1,1,0,0,
        0,0,0,0,0,0,0],

    t: [0,0,0,0,0,0,0,
        0,0,0,1,0,0,0,
        0,0,1,1,1,0,0,
        0,0,0,1,0,0,0,
        0,0,0,1,0,0,0,
        0,0,0,1,0,0,0,
        0,0,0,0,1,0,0,
        0,0,0,0,0,0,0],

    u: [0,0,0,0,0,0,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,0,1,1,1,1,0,
        0,0,0,0,0,0,0],

    v: [0,0,0,0,0,0,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,0,1,0,1,0,0,
        0,0,1,0,1,0,0,
        0,0,0,1,0,0,0,
        0,0,0,0,0,0,0],

    w: [0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,1,0,1,0,1,0,
        0,1,0,1,0,1,0,
        0,0,1,0,1,0,0,
        0,0,0,0,0,0,0],

    x: [0,0,0,0,0,0,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,0,1,0,1,0,0,
        0,0,0,1,0,0,0,
        0,0,1,0,1,0,0,
        0,1,0,0,0,1,0,
        0,0,0,0,0,0,0],
    
    y: [0,0,0,0,0,0,0,
        0,1,0,0,0,1,0,
        0,1,0,0,0,1,0,
        0,1,1,0,1,1,0,
        0,0,1,1,1,0,0,
        0,0,0,1,0,0,0,
        0,1,1,0,0,0,0,
        0,0,0,0,0,0,0],

    z: [0,0,0,0,0,0,0,
        0,1,1,1,1,1,0,
        0,0,0,0,1,1,0,
        0,0,0,1,1,0,0,
        0,0,1,1,0,0,0,
        0,1,1,0,0,0,0,
        0,1,1,1,1,1,0,
        0,0,0,0,0,0,0],
    
    '"': [
        0,0,0,0,0,0,0,
        0,0,1,0,1,0,0,
        0,0,1,0,1,0,0,
        0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,
        0,0,0,0,0,0,0
    ],

    '/': [
        0,0,0,0,0,0,0,
        0,0,0,0,1,0,0,
        0,0,0,0,1,0,0,
        0,0,0,1,0,0,0,
        0,0,0,1,0,0,0,
        0,0,1,0,0,0,0,
        0,0,1,0,0,0,0,
        0,0,0,0,0,0,0
    ],

    '?': [
        0,0,0,0,0,0,0,
        0,0,0,1,1,1,0,
        0,0,1,0,0,1,0,
        0,0,0,0,1,1,0,
        0,0,0,1,1,0,0,
        0,0,0,0,0,0,0,
        0,0,0,1,0,0,0,
        0,0,0,0,0,0,0
    ],

    '%': [
        0,0,0,0,0,0,0,
        0,1,1,0,0,1,0,
        0,1,1,0,1,1,0,
        0,0,0,1,1,0,0,
        0,0,1,1,0,0,0,
        0,1,1,0,1,1,0,
        0,1,0,0,1,1,0,
        0,0,0,0,0,0,0
    ],

    '&': [
        0,0,0,0,0,0,0,
        0,0,1,1,0,0,0,
        0,1,0,0,1,0,0,
        0,1,0,0,1,0,0,
        0,0,1,1,0,1,0,
        0,1,0,0,1,0,0,
        0,1,1,1,1,1,0,
        0,0,0,0,0,0,0
    ],

    '(': [
        0,0,0,0,0,0,0,
        0,0,0,1,0,0,0,
        0,0,1,0,0,0,0,
        0,0,1,0,0,0,0,
        0,0,1,0,0,0,0,
        0,0,1,0,0,0,0,
        0,0,0,1,0,0,0,
        0,0,0,0,0,0,0],

    ')': [
        0,0,0,0,0,0,0,
        0,0,0,1,0,0,0,
        0,0,0,0,1,0,0,
        0,0,0,0,1,0,0,
        0,0,0,0,1,0,0,
        0,0,0,0,1,0,0,
        0,0,0,1,0,0,0,
        0,0,0,0,0,0,0
    ],

    '@': [
        0,0,0,0,0,0,0,
        0,0,1,1,1,0,0,
        0,1,0,0,0,1,0,
        0,1,0,1,1,1,0,
        0,1,0,1,0,1,0,
        0,1,0,1,1,1,0,
        0,0,1,1,0,0,0,
        0,0,0,0,0,0,0
    ],
}

class BITMAP {
    constructor() {
        this.WIDTH;
        this.HEIGHT;
        this.PLANE;
    }

    bitmapMaker(character) {
        let q = character.length;
        let bitmap = new Array(8).fill(0).map(() => new Array(7*q).fill(0));
        
        // bitmap = chars['@'];
        let temp = "";
        for(let a = 0; a < q; a++){
            for(let i = 0; i < 7; i++) {
                for(let j = 0; j < 8; j++) {
                    bitmap[j][i + (7*a)] = chars[character[a]][j*7+i];
                }
            }
        }
        this.PLANE = bitmap;
        this.HEIGHT = 8;
        this.WIDTH = 7*q;
        console.log(bitmap);
    }
}

let bitmap = new BITMAP();
// bitmap.bitmapMaker('text');

const transpose = m => m[0].map((x,i) => m.map(x => x[i]));
class DISPLAY {
    #LOCK;

    constructor(width, height) {
        this.WIDTH = width;
        this.HEIGHT = height;
        // this.PLANE = new Array(width * height).fill(0);
        this.PLANE = new Array(width).fill(0).map(element => new Array(height).fill(0));
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
                    this.PLANE[i][j] = color;
                }
            }
        }
        // console.log(this.PLANE.map(element => element.join(" ")).join("\n").replaceAll("-1","⎯").replaceAll("1","|"));
        // console.log(transpose(this.PLANE).map(element => element.join(" "))
        //     .join("\n").replaceAll("-1", "-").replaceAll("1", "+"));
        // console.log(transpose(this.PLANE).map(element => element.join(" "))
        //     .join("\n").replaceAll("0", " ").replaceAll("1", "+"));
    }

    circle(x1, y1, diameter, color) {
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
                    this.PLANE[i][j] = color;
                }
            }
        }
    }

    clear(color) {
        this.PLANE = this.PLANE.map(element1 => element1.map(() => color));
    }

    resize(width, height) {
        this.PLANE = this.PLANE
    }

    textOut(x, y, color, string) {
        let temp = new BITMAP();
        temp.bitmapMaker(string);

        for(let i = x; i < this.WIDTH && i < temp.WIDTH; i++) {
            for(let j = y; j < this.HEIGHT && j < temp.HEIGHT; j++) {
                this.PLANE[i][j] = temp.PLANE[i][j];
            }
        }
    }

    textOut2(x, y, color, string) {

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

    render() {
        for(let i = 0; i < this.WIDTH; i++) {
            for(let j = 0; j < this.HEIGHT; j++) {
                ctx.fillStyle = 'rgb('+this.PLANE[i][j]+','+this.PLANE[i][j]+','+this.PLANE[i][j]+')';
                ctx.fillRect(i, j, canvas.width/this.WIDTH, canvas.height/this.HEIGHT);
            }
        }
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