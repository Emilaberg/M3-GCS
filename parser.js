let temporaryArray = new Array;

function parser() {
    temporaryArray = document.getElementById("textinput").value.split("\n");
    for (let l = 0; l < temporaryArray.width(); l++) {
        while (temporaryArray[0].includes(' ') != false) {
            temporaryArray[0].replace(' ','');
        }
    }
    interpreter();
}

function interpreter() {
    console.log(temporaryArray);
}


