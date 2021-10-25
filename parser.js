// this script is used to take written inputs and execute those inputs
let temporaryArray = new Array;

// paser() is used to take the input and make it readable for the interpeter()
function parser() {
    // It takes the input from the textares as a string and splits each line to get each line as an item in the array
    temporaryArray = document.getElementById('textInput').value.split('\n');
    // Then goes through each line
    for (let l = 0; l < temporaryArray.length; l++) {
        // It Turns the all the letters to lowercase, removes uneccesary characters and splits the string
        temporaryArray[l] = temporaryArray[l].toLowerCase();
        temporaryArray[l] = temporaryArray[l].replaceAll(" ",'');
        temporaryArray[l] = temporaryArray[l].replaceAll(")",'');
        temporaryArray[l] = temporaryArray[l].replaceAll(";",'');
        temporaryArray[l] = temporaryArray[l].replaceAll("'",'');
        temporaryArray[l] = temporaryArray[l].replaceAll('"','');
        temporaryArray[l] = temporaryArray[l].replaceAll("(",' ');
        temporaryArray[l] = temporaryArray[l].replaceAll(",",' ');
        temporaryArray[l] = temporaryArray[l].split(' ');
    }
    // After going through all the lines the array will consist of each line being an item in the array. Which is either a single item or another array
    interpreter();
}


// interpreter() takes the value of the array and execute them
function interpreter() {
    for (let l = 0; l < temporaryArray.length; l++) {
        // First checks if the first index is an array, if it is then it executes the code bellow
        if (Array.isArray(temporaryArray[l]) == true) {
            // Then checks which function matches the first string and if all the appropriate inputs are NaN before 
            if (temporaryArray[l][0] == "putpixel") {
                if (isNaN(temporaryArray[l][1]) == false && isNaN(temporaryArray[l][2]) == false && isNaN(temporaryArray[l][3]) == false) {
                    hello.putPixel(parseInt(temporaryArray[l][1]),parseInt(temporaryArray[l][2]),parseInt(temporaryArray[l][3]));
                    hello.render();
                }
            }
            if (temporaryArray[l][0] == "line") {
                if (isNaN(temporaryArray[l][1]) == false && isNaN(temporaryArray[l][2]) == false && isNaN(temporaryArray[l][3]) == false && isNaN(temporaryArray[l][4]) == false) {
                    hello.line(parseInt(temporaryArray[l][1]),parseInt(temporaryArray[l][2]),parseInt(temporaryArray[l][3]),parseInt(temporaryArray[l][4]),parseInt(temporaryArray[l][5]));
                    hello.render();
                }
            }
            if (temporaryArray[l][0] == "rectangle") {
                if (isNaN(temporaryArray[l][1]) == false && isNaN(temporaryArray[l][2]) == false && isNaN(temporaryArray[l][3]) == false && isNaN(temporaryArray[l][4]) == false && isNaN(temporaryArray[l][5]) == false) {
                    hello.rectangle(parseInt(temporaryArray[l][1]),parseInt(temporaryArray[l][2]),parseInt(temporaryArray[l][3]),parseInt(temporaryArray[l][4]),parseInt(temporaryArray[l][5]));
                    hello.render();
                }
            }
            if (temporaryArray[l][0] == "circle") {
                if (isNaN(temporaryArray[l][1]) == false && isNaN(temporaryArray[l][2]) == false && isNaN(temporaryArray[l][3]) == false && isNaN(temporaryArray[l][4]) == false) {
                    hello.circle(parseInt(temporaryArray[l][1]),parseInt(temporaryArray[l][2]),parseInt(temporaryArray[l][3]),parseInt(temporaryArray[l][4]));
                    hello.render();
                }
            }
            if (temporaryArray[l][0] == "textout") {
                if (isNaN(temporaryArray[l][1]) == false && isNaN(temporaryArray[l][2]) == false && isNaN(temporaryArray[l][3]) == false) {
                    hello.textOut(parseInt(temporaryArray[l][1]),parseInt(temporaryArray[l][2]),parseInt(temporaryArray[l][3]),temporaryArray[l][4]);
                    hello.render();
                }
            }
            if (temporaryArray[l][0] == "resize") {
                if (isNaN(temporaryArray[l][1]) == false && isNaN(temporaryArray[l][2]) == false) {
                    hello.resize(parseInt(temporaryArray[l][1]),parseInt(temporaryArray[l][2]));
                    hello.render();
                }
            }
            if (temporaryArray[l][0] == "clear") {
                if (isNaN(temporaryArray[l][1]) == false) {
                    hello.clear(parseInt(temporaryArray[l][1]));
                    hello.render();
                }
            }
        }
        else {
            // Here it only checks which function matches the string
            if (temporaryArray[l] == "scrollleft") {
                hello.scrollLeft();
                hello.render();
            }
            if (temporaryArray[l] == "scrollright") {
                hello.scrollRight();
                hello.render();
            }
            if (temporaryArray[l] == "scrollup") {
                hello.scrollUp();
                hello.render();
            }
            if (temporaryArray[l] == "scrolldown") {
                hello.scrollDown();
                hello.render();
            }
            if (temporaryArray[l] == "pscrollleft") {
                hello.pscrollLeft();

            }
            if (temporaryArray[l] == "pscrollright") {
                hello.pscrollRight();
                hello.render();
            }
            if (temporaryArray[l] == "pscrollup") {
                hello.pscrollUp();
                hello.render();
            }
            if (temporaryArray[l] == "pscrolldown") {
                hello.pscrollDown();
                hello.render();
            }
        }
    }
}


