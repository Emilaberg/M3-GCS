// let canvas = document.querySelector('canvas');

let preserve = false;
let command = false;
let text = false;
let shape = 0;
let stop = false;

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
    return;
}

let dropDown = document.getElementById("options");
let colorBtn = document.getElementById("color");
let select = document.getElementById('options');

select.addEventListener('change',function(){
    renderInputs(select.selectedIndex-1);
});


let inputs = {
    // 
    X1: {
        "name":"X1",
        "type":"number",
        "placeholder" :"X1",
        "id":"x1",
        "value": "document.getElementByID('w').value"
    },
    X2: {
        "name":"X2",
        "type":"number",
        "placeholder":"X2",
        "id":"x2"
    },
    Y1: 
    {
        "name":"Y1",
        "type":"number",
        "placeholder":"Y1",
        "id":"y1"
    },
    Y2: 
    {
        "name":"Y2",
        "type":"number",
        "placeholder":"Y2",
        "id":"y2"
    },
    COLOR: 
    {
        "name":"color",
        "type":"number",
        "placeholder":"Color",
        "id":"color"
    },
    DIAMETER: 
    {
        "name":"diameter",
        "type":"number",
        "placeholder":"d",
        "id":"d"
    },
    
};

let arr = [
    //Circle
    ['X1', 'Y1', 'DIAMETER',],
    //Rectangle
    [ 'X1' , 'Y1' , 'X2' , 'Y2'],
    //line
    [ 'X1' , 'Y1' , 'X2' , 'Y2'],
    //pixel
    [ 'X1', 'Y1'],
    //names
    [ 'circle', 'rectangle', 'line', 'pixel'],
    // Textout
    ['X1', 'Y1', 'string']
];


function renderInputs(func)
{
    func--;
    if(select.value === 'reSize')
    {
        renderResize();
    }
    else{
        let el = document.getElementById('numbers');
        let colorBtn = document.getElementById("color");
        
        el.innerHTML = '';
    
        for (let i = 0; i < arr[func].length; i++)
        {
            console.log(el.innerHTML += `<input name="${inputs[arr[func][i]].name}" placeholder="${inputs[arr[func][i]].placeholder}" type="${inputs[arr[func][i]].type}" id="${inputs[arr[func][i]].id}">`);
        }
        colorBtn.innerHTML = `<input type="number" name="color" placeholder="color" id="shade"><div id="displayColor"></div>`
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

let reText = false;
function renderText()
{
    reText = true;
    let el = document.getElementById('numbers');
    let colorBtn = document.getElementById("color");
    let textCommand = document.getElementById("text-command");

    text = !text;

        if(text == true){
            

            el.innerHTML = '';
            textCommand.innerHTML = '';
            textCommand.innerHTML += `<div><button class="command-btn" onclick="renderParser()">Command</button><button class="text-btn" onclick="renderText()">Text</button></div><textarea name="" id="textInput" cols="40" rows="2" placeholder="Ex: circle(00,00,00,255)..."></textarea>`
            el.innerHTML += `<input name="X1" placeholder="X1" type="number" id="x1"><input name="Y1" placeholder="Y1" type="number" id="y1">`;
            colorBtn.innerHTML = `<input type="number" name="color" placeholder="color" id="shade"><div id="displayColor"></div>`;

            document.querySelector('.text-btn').style.backgroundColor = '#333';
            document.querySelector('.text-btn').style.color = '#fff';
            return reText;
        }
        else{
            document.querySelector('.text-btn').style.backgroundColor = '#fff';
            document.querySelector('.text-btn').style.color = '#333';

            el.innerHTML = '';
            colorBtn.innerHTML = '';
        }

}

function renderParser()
{
    let parser = document.getElementById("text-command");

    parser.innerHTML = '';
    parser.innerHTML += `<div><button class="command-btn" onclick="renderParser()">Command</button><button class="text-btn" onclick="renderText()">Text</button></div><textarea name="" id="textInput" cols="40" rows="2" placeholder="Ex: Draw a circle "></textarea>`

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

function writeShape()
{
    const expr = select.selectedIndex-2;
    let success = document.getElementById("success");
    let errorDiv = document.querySelector(".errorDiv");
    let errorMessage = document.querySelector('.errorP');
    let el = document.getElementById('numbers');
    let col = document.querySelector('.inputs');

    if(command = true){
        parser();
        return;
    }

    if(reText == true){

        let innerText = document.querySelector('#textInput');

        if(x1.value.length == 0 || x1.value < 0 || y1.value.length == 0 || y1.value < 0 || innerText.value == '' || shade.value.length == 0 || shade.value < 0 || shade.value > 255){
            errorDiv.style.display = 'block';
            errorMessage.innerHTML = 'Inputs not correct';
            reText = false;
            el.innerHTML = '';
            setTimeout(function session1(){ 
                errorDiv.style.display = 'none';
            }, 3000);
        }
        else{
            hello.textOut(x1.value, y1.value, shade.value, innerText.value );
            success.style.display = 'block';
            el.innerHTML = '';
            col.innerHTML = '';
            setTimeout(function session1(){ 
                success.style.display = 'none';
                reText = false;
            }, 3000);
            return;
        }

        return;
    }
    
    if(select.value === "reSize")
    {
        console.log(`you pressed the resize button and resized the screen to W: ${w.value} and H: ${h.value}`);
        hello.resize(w.value, h.value);
    }
    else
    {

        if(expr == 0){
            // Circle
            if(x1.value.length == 0 || x1.value < 0 || y1.value.length == 0 || y1.value < 0 || d.value.length == 0 || d.value < 0 || shade.value.length == 0 || shade.value < 0 || shade.value > 255){
                errorDiv.style.display = 'block';
                errorMessage.innerHTML = 'Inputs not correct';
                setTimeout(function session1(){ 
                    errorDiv.style.display = 'none';
                }, 3000);
            }
            else{
                hello.circle(x1.value, y1.value, d.value, shade.value);
                success.style.display = 'block';
                el.innerHTML = '';
                col.innerHTML = '';
                setTimeout(function session1(){ 
                    success.style.display = 'none';
                }, 3000);
                return;
            }
        }

        if(expr == 1){
            // Rectangle
            if(x1.value.length == 0 || x1.value < 0 || y1.value.length == 0 || y1.value < 0 || x2.value.length == 0 || x2.value < 0 || y2.value.length == 0 || y2.value < 0 || shade.value.length == 0 || shade.value < 0 || shade.value > 255){
                errorDiv.style.display = 'block';
                errorMessage.innerHTML = 'Inputs not correct';
                setTimeout(function session1(){ 
                    errorDiv.style.display = 'none';
                }, 3000);
            }
            else{
                hello.rectangle(x1.value, y1.value, x2.value, y2.value, shade.value);
                success.style.display = 'block';
                el.innerHTML = '';
                col.innerHTML = '';
                setTimeout(function session1(){ 
                    success.style.display = 'none';
                }, 3000);
                return;
            }
        }

        if(expr == 2){
            // Line
            if(x1.value.length == 0 || x1.value < 0 || y1.value.length == 0 || y1.value < 0 || x2.value.length == 0 || x2.value < 0 || y2.value.length == 0 || y2.value < 0 || shade.value.length == 0 || shade.value < 0 || shade.value > 255){
                errorDiv.style.display = 'block';
                errorMessage.innerHTML = 'Inputs not correct';
                setTimeout(function session1(){ 
                    errorDiv.style.display = 'none';
                }, 3000);
            }
            else{
                hello.line(x1.value, y1.value, x2.value, y2.value, shade.value);
                success.style.display = 'block';
                el.innerHTML = '';
                col.innerHTML = '';
                setTimeout(function session1(){ 
                    success.style.display = 'none';
                }, 3000);
                return;
            }
        }

        if(expr == 3){
            // Pixel
            if(x1.value.length == 0 || x1.value < 0 || y1.value.length == 0 || y1.value < 0 || shade.value.length == 0 || shade.value < 0 || shade.value > 255){
                errorDiv.style.display = 'block';
                errorMessage.innerHTML = 'Inputs not correct';
                
                setTimeout(function session1(){ 
                    errorDiv.style.display = 'none';
                    el.innerHTML = '';
                col.innerHTML = '';
                }, 3000);
            }
            else{
                hello.putPixel(x1.value, y1.value, shade.value);
                success.style.display = 'block';
                el.innerHTML = '';
                col.innerHTML = '';
                setTimeout(function session1(){ 
                    success.style.display = 'none';
                }, 3000);
                return;
            }
        }

        // switch(expr)
        // {
        //     // circle
        //     case 0:
        //         console.log(x1.value,y1.value,d.value, shade.value);
        //         hello.circle(x1.value,y1.value,d.value, shade.value);
        //         break;
        //     // Rectangle
        //     case 1:
        //         // prints message in the console for debugging
        //         console.log(`you chose rectangle and entered X1: ${x1.value} Y1: ${y1.value} X2: ${x2.value} Y2: ${y2.value} and color ${shade.value}`);
        //         // draws a rectangle with the inputs you entered.
        //         hello.rectangle(x1.value,y1.value,x2.value,y2.value, shade.value);
        //         break;
        //     // line
        //     case 2:
        //         console.log(`you chose pixel and entered X: ${x1.value} and Y: ${y1.value} and color ${shade.value}`);
        //         hello.line(x1.value,x2.value,y1.value,y2.value, shade.value);
        //         break;
        //     //pixel
        //     case 3:
        //         console.log(`you chose pixel and entered X: ${x1.value} and Y: ${y1.value} and color ${shade.value}`);
        //         hello.putPixel(x1.value,y1.value, shade.value);
        //         break;
        // }
    }
    // success.style.display = "block";
}

function clearCanvas()
{
    hello.clear(0);
    hello.clear(shade.value);
}

function ScrollStop()
{
    clearInterval(timer);
}

function canvasScroll(num)
{
    stop = false;
    expr = num;
    if(preserve === false)
    {
        switch(expr)
        {
            // Scroll left
            case 0:
                hello.scrollUp();
                break;
            case 1:
                hello.scrollLeft();
                break;
            case 2:
                hello.scrollRight();
                break;
            case 3:
                hello.scrollDown();
                break;
        }
    }
    else if(preserve === true && stop === false){
        switch(expr)
        {
            // Scroll left
            case 0:
                hello.pscrollUp();
                break;
            case 1:
                hello.pscrollLeft();
                break;
            case 2:
                hello.pscrollRight();
                break;
            case 3:
                hello.pscrollDown();
                break;
        }
    }
}

let timer;

function startTimer(num) {
    timer = setInterval(function() { 
        canvasScroll(num) 
    }, 100);
}

function buttonPress() {
    window.open('controlPanel.html', 'name','width=750,height=390');
}

// window.addEventListener('click', function(){
//     let displayColor = document.querySelector('#displayColor');
//     displayColor.style.backgroundColor = `rgb(${shade.value}, ${shade.value}, ${shade.value})`;
// });

  