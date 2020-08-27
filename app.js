//SELECTORS

const clrCodeOption = document.querySelector('.slt-clr-code');

const inputsClrDiv = document.querySelector('.inputs-clr');
const btnClr = document.querySelector('.btn-clr');

//EVENTS

clrCodeOption.addEventListener('click', sltClrCode);
btnClr.addEventListener('click', function () {
    const inputsClr = document.querySelectorAll('.input-clr');
    console.log(inputsClr);
    let alpha = 0;
    let red = 0;
    let green = 0;
    let blue = 0;
    let hex = 0;
    let isInputGood = 1;

    //RESET STYLES
    inputsClr.forEach(function (input){
        input.style.border = "1px solid black"
    }); 

    // INPUTS VALIDAITON
    inputsClr.forEach(function (input){
        
            if(input.classList.contains('red') || input.classList.contains('green') || input.classList.contains('blue')){
                if(input.value >= 0 && input.value <= 255){
                    console.log("Good");
                }else {
                    isInputGood = 0;
                    input.style.border = "2px solid red";
                    input.placeholder = "Number 0-255";
                }
            }
            else if(input.classList.contains('alpha')){
                if(input.value >= 0 && input.value <= 1){
                    console.log("Good");
                }else {
                    isInputGood = 0;
                    input.style.border = "2px solid red";
                    input.placeholder = "Number 0-1";
                }
            }
            else if(input.classList.contains('hex')){
                console.log(input.value.lenght);
                if(input.value.length === 6 && !isNaN(Number('0x' + input.value))){
                    console.log("Good");
                }else {
                    isInputGood = 0;
                    input.style.border = "2px solid red";
                    input.placeholder = "{6} 0-9 or a-f";
                }
            }    
        });
    // END OF INPUTS VALIDATION
    if(isInputGood){
        switch (clrCodeOption.value){  
            case "rgba":
                alpha = inputsClr[0].value;
                red = inputsClr[1].value;
                green = inputsClr[2].value;
                blue = inputsClr[3].value;

            document.body.style.backgroundColor = "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";
                break;

            case "rgb":
                red = inputsClr[0].value;
                green = inputsClr[1].value;
                blue = inputsClr[2].value;
                document.body.style.backgroundColor = "rgba(" + red + "," + green + "," + blue + ")";
                break;
            case "hex":
                hex = inputsClr[0].value;
                document.body.style.backgroundColor = "#" + hex;
        } 
    }else {
        inputsClr.forEach(function (input){
            input.value = "";
        })
    }  
});

//FUNCTIONS

function sltClrCode(){
    inputsClrDiv.innerHTML = '';
    switch (clrCodeOption.value){
        case "rgba":

            let alphaInput = document.createElement('input');
            alphaInput.type = "text"
            alphaInput.classList.add('input-clr', 'alpha');
            alphaInput.placeholder = "Alpha (A)";
            inputsClrDiv.appendChild(alphaInput);

        case "rgb":

            let redInput = document.createElement('input');
            redInput.type = "text"
            redInput.classList.add('input-clr', 'red');
            redInput.placeholder = "Red (R)";
            inputsClrDiv.appendChild(redInput);

            let greenInput = document.createElement('input');
            greenInput.type = "text"
            greenInput.classList.add('input-clr', 'green');
            greenInput.placeholder = "Green (G)";
            inputsClrDiv.appendChild(greenInput);

            let blueInput = document.createElement('input');
            blueInput.type = "text"
            blueInput.classList.add('input-clr', 'blue');
            blueInput.placeholder = "Blue (B)";
            inputsClrDiv.appendChild(blueInput);
            break;

        case "hex":
            let hexInput = document.createElement('input');
            hexInput.type = "text"
            hexInput.classList.add('input-clr', 'hex');
            hexInput.placeholder = "Hex (#??????)";
            inputsClrDiv.appendChild(hexInput);
            break;
    }
}


