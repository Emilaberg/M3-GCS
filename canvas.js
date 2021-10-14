let canvas = document.querySelector('canvas');

let preserve = false;
let command = false;
let text = false;
let shape = 0;

function btnOn(btn){
    if(btn == 'preserve'){
        preserve = !preserve;

        if(preserve == true){
            document.querySelector(`.${btn}-btn`).style.backgroundColor = '#333';
            document.querySelector('.preserve-btn').style.color = '#fff';
        }
        else{
            document.querySelector('.preserve-btn').style.backgroundColor = '#fff';
            document.querySelector('.preserve-btn').style.color = '#333';
        }
    }
    else if(btn == 'command'){
        command = !command;

        if(command == true){
            document.querySelector('.command-btn').style.backgroundColor = '#333';
            document.querySelector('.command-btn').style.color = '#fff';
        }
        else{
            document.querySelector('.command-btn').style.backgroundColor = '#fff';
            document.querySelector('.command-btn').style.color = '#333';
        }
    }
    else if(btn == 'text'){
        text = !text;

        if(text == true){
            document.querySelector('.text-btn').style.backgroundColor = '#333';
            document.querySelector('.text-btn').style.color = '#fff';
        }
        else{
            document.querySelector('.text-btn').style.backgroundColor = '#fff';
            document.querySelector('.text-btn').style.color = '#333';
        }
    }
    

    return;
}

let dropDown = document.getElementById("options");
let circle = document.getElementById("shapes");
let colorBtn = document.getElementById("color");

function onClick()
{
    console.log("yes")
    
    if(dropDown.style.visibility == "visible")
    {
        dropDown.style.visibility = "hidden";
    }
    else
    {
        dropDown.style.visibility = "visible";
    }
}


let inputs = {
    // 
    X1: {
        "name":"X1",
        "type":"text",
        "placeholder" :"X1",
        "id":"x1"
    },
    X2: {
        "name":"X2",
        "type":"text",
        "placeholder":"X2",
        "id":"x2"
    },
    Y1: 
    {
        "name":"Y1",
        "type":"text",
        "placeholder":"Y1",
        "id":"y1"
    },
    Y2: 
    {
        "name":"Y2",
        "type":"text",
        "placeholder":"Y2",
        "id":"y2"
    },
    COLOR: 
    {
        "name":"color",
        "type":"text",
        "placeholder":"Color",
        "id":"color"
    },
    RADIUS: 
    {
        "name":"radius",
        "type":"text",
        "placeholder":"r",
        "id":"r"
    },
    
};

let arr = [
    //Circle
    ['X1', 'X2', 'RADIUS',],
    //Rectangle
    [ 'X1' , 'X2' , 'Y1' , 'Y2'],
    //line
    [ 'X1' , 'X2' , 'Y1' , 'Y2'],
    //pixel
    [ 'X1', 'Y1'],
    //names
    [ 'circle', 'rectangle', 'line', 'pixel']
    
];

function renderInputs(func)
{
    let el = document.getElementById('numbers');
    let colorBtn = document.getElementById("color");
    el.innerHTML = '';

    for (let i = 0; i < arr[func].length; i++)
    {
        el.innerHTML += `<input name="${inputs[arr[func][i]].name}" placeholder="${inputs[arr[func][i]].placeholder}" type="${inputs[arr[func][i]].type}" id="${inputs[arr[func][i]].id}">`;
    }
    shape = func;
    circle.innerHTML = arr[4][func];
    dropDown.style.visibility = "hidden";
    colorBtn.innerHTML = `<input type="text" name="color" placeholder="color"><div></div>`
}

function renderResize()
{
    let el = document.getElementById('numbers');

    el.innerHTML = '';
    el.innerHTML += `<button onclick="renderResizeBtn()" style="padding: 10px; box-shadow: black 2px 2px;">resize</button>`;
    dropDown.style.visibility = "hidden";
    circle.innerHTML = "resize";
}

function renderResizeBtn()
{
    let el = document.getElementById('numbers');

    el.innerHTML = '';
    el.innerHTML += `<div style="display: flex; align-items:stretch; gap: 6px; background-color: #fefefe; padding: 6px; border-radius: 4px; box-shadow: rgba(39, 36, 36, 0.287) 4px 4px;"><span style="margin:auto; font-size: 22px;">RESIZE</span><input type="text" placeholder="W" id="w"><input type="text" placeholder="H" id="h"></div>` 
}

function renderCommand()
{
    
    let textCommand = document.getElementById("text-command");

    textCommand.innerHTML = '';
    textCommand.innerHTML += `<div><button onclick="renderCommand()">Command</button><button onclick="renderParser()">Text</button></div><textarea name="" id="" cols="40" rows="2" placeholder="Ex: circle(00,00,00,255)..."></textarea>`
}

function renderParser()
{
    let parser = document.getElementById("text-command");

    parser.innerHTML = '';
    parser.innerHTML += `<div><button onclick="renderCommand()">Command</button><button onclick="renderParser()">Text</button></div><textarea name="" id="" cols="40" rows="2" placeholder="Ex: Draw a circle "></textarea>`
}


function writeShape(){
    
}