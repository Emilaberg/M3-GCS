// let canvas = document.querySelector('canvas');

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
            presBtn();
        }
        else{
            document.querySelector('.preserve-btn').style.backgroundColor = '#fff';
            document.querySelector('.preserve-btn').style.color = '#333';
            presBtn();
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
let colorBtn = document.getElementById("color");



let inputs = {
    // 
    X1: {
        "name":"X1",
        "type":"text",
        "placeholder" :"X1",
        "id":"x1",
        "value": "document.getElementByID('w').value"
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

let select = document.getElementById('options');
select.addEventListener('change',function(){
    renderInputs(select.selectedIndex-1);
});

function renderInputs(func)
{
    func--;
    if(select.value === 'reSize')
    {
        renderResize();
    }else
    {
        let el = document.getElementById('numbers');
        let colorBtn = document.getElementById("color");
        
        el.innerHTML = '';
    
        for (let i = 0; i < arr[func].length; i++)
        {
            el.innerHTML += `<input name="${inputs[arr[func][i]].name}" placeholder="${inputs[arr[func][i]].placeholder}" type="${inputs[arr[func][i]].type}" id="${inputs[arr[func][i]].id}">`;
        }
        colorBtn.innerHTML = `<input type="text" name="color" placeholder="color" id="shade"><div></div>`
    }
    console.log(func);
    console.log("option " + select.selectedIndex);
    
}

function renderResize()
{
    let el = document.getElementById('numbers');

    el.innerHTML = '';
    el.innerHTML += `<button onclick="renderResizeBtn()" style="padding: 10px; box-shadow: black 2px 2px;">resize</button>`;
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
    textCommand.innerHTML += `<div><button onclick="renderCommand()">Command</button><button onclick="renderParser()">Text</button></div><textarea name="" id="textInput" cols="40" rows="2" placeholder="Ex: circle(00,00,00,255)..."></textarea>`
}

function renderParser()
{
    let parser = document.getElementById("text-command");

    parser.innerHTML = '';
    parser.innerHTML += `<div><button onclick="renderCommand()">Command</button><button onclick="renderParser()">Text</button></div><textarea name="" id="textInput" cols="40" rows="2" placeholder="Ex: Draw a circle "></textarea>`
}

function writeShape(){
    const expr = select.selectedIndex-2
    let success = document.getElementById("success");
    switch(expr)
    {
        // circle
        case 0:
            console.log(x1.value,x2.value,r.value);
            break;
        // Rectangle
        case 1:
            // prints message in the console for debugging
            console.log(`you chose rectangle and entered X1: ${x1.value} Y1: ${y1.value} X2: ${x2.value} Y2: ${y2.value} and color ${shade.value}`);
            // draws a rectangle with the inputs you entered. 
            hello.rectangle(x1.value,y1.value,x2.value,y2.value);
            success.style.display = "block";
            break;
        // line
        case 2:
            console.log(`you chose pixel and entered X: ${x1.value} and Y: ${y1.value} and color ${shade.value}`);
            success.style.display = "block";
            break;
        //pixel
        case 3:
            console.log(`you chose pixel and entered X: ${x1.value} and Y: ${y1.value} and color ${shade.value}`);
            break;

    }
}
