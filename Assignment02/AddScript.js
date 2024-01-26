function Addition(a,b){
    var num1 = parseFloat(a)
    var num2 = parseFloat(b)
    return num1 + num2
}

const num1 = window.prompt('Addition: Please enter Number 1.');
const num2 = window.prompt('Addition: Please enter Number 2.');


function init(){
    const result = Addition(num1,num2)
    const newParagraph = document.createElement('p');
    const newContent = document.createTextNode(`Addition Result: ${result}`);
    newParagraph.appendChild(newContent);
    const parent = document.getElementById('dynamic');
    parent.appendChild(newParagraph);
}