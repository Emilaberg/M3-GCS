let temporaryArray = new Array;
document.writeln('<script src="display.js"></script>');
function parser() {
    console.log("Parse start");
    temporaryArray = document.getElementById('textInput').value.split('\n');
    console.log(temporaryArray);
    for (let l = 0; l < temporaryArray.length; l++) {
        temporaryArray[l] = temporaryArray[l].toLowerCase();
        temporaryArray[l] = temporaryArray[l].replaceAll(" ",'');
        temporaryArray[l] = temporaryArray[l].replaceAll(")",'');
        temporaryArray[l] = temporaryArray[l].replaceAll(";",'');
        temporaryArray[l] = temporaryArray[l].replaceAll("'",'');
        temporaryArray[l] = temporaryArray[l].replaceAll("(",' ');
        temporaryArray[l] = temporaryArray[l].replaceAll(",",' ');
        temporaryArray[l] = temporaryArray[l].split(' ');
    }
    console.log(temporaryArray);
    interpreter();
    console.log("Parse end");
}

function interpreter() {
    console.log("Interpreter start");
    for (let l = 0; l < temporaryArray.length; l++) {
        if (Array.isArray(temporaryArray[l]) == true) {
            if (temporaryArray[l][0] = "putpixel") {
                if (isNaN(temporaryArray[l][1]) == false) {
                    if (isNaN(temporaryArray[l][2]) == false) {
                        if (isNaN(temporaryArray[l][3]) == false) {
                            hello.putPixel(parseInt(temporaryArray[l][1]),parseInt(temporaryArray[l][2]),parseInt(temporaryArray[l][3]));
                        }
                    }
                }
            }
            if (temporaryArray[l][0] = "line") {
                if (isNaN(temporaryArray[l][1]) == false) {
                    if (isNaN(temporaryArray[l][2]) == false) {
                        if (isNaN(temporaryArray[l][3]) == false) {
                            if (isNaN(temporaryArray[l][4]) == false) {
                                hello.line(parseInt(temporaryArray[l][1]),parseInt(temporaryArray[l][2]),parseInt(temporaryArray[l][3]),parseInt(temporaryArray[l][4]),parseInt(temporaryArray[l][5]));
                            }
                        }
                    }
                }
            }
            if (temporaryArray[l][0] = "rectangle") {
                if (isNaN(temporaryArray[l][1]) == false) {
                    if (isNaN(temporaryArray[l][2]) == false) {
                        if (isNaN(temporaryArray[l][3]) == false) {
                            if (isNaN(temporaryArray[l][4]) == false) {
                                hello.rectangle(parseInt(temporaryArray[l][1]),parseInt(temporaryArray[l][2]),parseInt(temporaryArray[l][3]),parseInt(temporaryArray[l][4]),parseInt(temporaryArray[l][5]));
                            }
                        }
                    }
                }
            }
            if (temporaryArray[l][0] = "circle") {
                if (isNaN(temporaryArray[l][1]) == false) {
                    if (isNaN(temporaryArray[l][2]) == false) {
                        if (isNaN(temporaryArray[l][3]) == false) {
                            if (isNaN(temporaryArray[l][4]) == false) {
                                hello.circle(parseInt(temporaryArray[l][1]),parseInt(temporaryArray[l][2]),parseInt(temporaryArray[l][3]),parseInt(temporaryArray[l][4]));
                            }
                        }
                    }
                }
            }
            if (temporaryArray[l][0] = "textout") {
                if (isNaN(temporaryArray[l][1]) == false) {
                    if (isNaN(temporaryArray[l][2]) == false) {
                        if (isNaN(temporaryArray[l][3]) == false) {
                            hello.textOut(parseInt(temporaryArray[l][1]),parseInt(temporaryArray[l][2]),parseInt(temporaryArray[l][3]),temporaryArray[l][4]);
                        }
                    }
                }
            }
            if (temporaryArray[l][0] = "resize") {
                if (isNaN(temporaryArray[l][1]) == false) {
                    if (isNaN(temporaryArray[l][2]) == false) {
                        hello.resize(parseInt(temporaryArray[l][1]),parseInt(temporaryArray[l][2]));
                    }
                }
            }
            if (temporaryArray[l][0] = "clear") {
                if (isNaN(temporaryArray[l][1]) == false) {
                    hello.clear(parseInt(temporaryArray[l][1]));
                }
            }
        }
        else {
            if (temporaryArray[l] = "scrollleft") {
                hello.scrollLeft();
            }
            if (temporaryArray[l] = "scrollright") {
                hello.scrollRight();
            }
            if (temporaryArray[l] = "scrollup") {
                hello.scrollUp();
            }
            if (temporaryArray[l] = "scrolldown") {
                hello.scrollDown();
            }
            if (temporaryArray[l] = "pscrollleft") {
                hello.pscrollLeft();
            }
            if (temporaryArray[l] = "pscrollright") {
                hello.pscrollRight();
            }
            if (temporaryArray[l] = "pscrollup") {
                hello.pscrollUp();
            }
            if (temporaryArray[l] = "pscrolldown") {
                hello.pscrollDown();
            }
        }
    }
    console.log("Interpreter end");
}


