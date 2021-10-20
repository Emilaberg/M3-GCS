let queue = [];

const I = x => x;

let operations = {
    'add': a => b => a + b,
    'mult': a => b => a * b,
    'sub': a => b =>  a + b,
    'max': a => b =>  a < b ? b : a,
    'min': a => b =>  a < b ? a : b
}

const addQueue = string => arg1 => arg2 => queue.push(() => (operations[string](arg1)(arg2)));
const deQueue = () => (queue.shift())();

const lexMap = string => {
    if(isNaN(string)) {
        return ['OPERAND', {'VALUE': string}];
    } else if(string in operations) {
        return ['OPERATOR', {'VALUE': string}];
    }
}

const lexer = (string) => {
    let temp = string.split(';').map(element => element.split(' ').filter(element1 => element1 !== ''));
    temp.map(element => )
}


const getArgs = (array) => array.filter(element => element)

function parse(string) {
    let temp = string.split(';');
    temp.map(element => element)
}









let operations1 = {
    "line": {
        "arguments": ["int","int","int","int","int"]
    },
    "circle": {
        "arguments": ["int","int","int","int"]
    }
}

(() => 1)

/*
syntax example:

line 0 0 40 50 128;
line 4 4 30 20 255;
copy 0 0 50 50; //copies a rectangular area of the display
paste 20 20;    //pastes the most recent copy starting at the location specified, in this case x=20 y=20





*/